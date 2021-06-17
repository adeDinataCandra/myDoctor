import React, {useEffect, useState} from 'react';
import { View, StyleSheet } from 'react-native';
import { Doctor1, Doctor2, Doctor3 } from '../../assets';
import { Header, List } from '../../components';
import { Fire } from '../../config';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation, route}) => {
    const category = route.params;
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        callDoctorCategory(category.category)
    }, []);

    const callDoctorCategory = category => {
        Fire.database()
        .ref('doctors/')
        .orderByChild('category')
        .equalTo(category)
        .once('value')
        .then( res => {
            console.log(res.val())
            if(res.val()){
                const dataOld = res.val();
                const data = [];
                Object.keys(dataOld).map(item => {
                    data.push({
                        id: item,
                        data: dataOld[item]
                    });
                });
                console.log('data list doctor:', data);
                setDoctors(data);
            }
        })

    }
  
    return <View style={Styles.container}>
        <Header type='dark' title={`Pilih ${category.category}`} onPress={() => navigation.goBack()} />
        {
            doctors.map(doctor => {
                return(
                    <List key={doctor.data.uid} onPress={() => navigation.navigate('DoctorProfile', doctor)} type='next' pic={{uri: doctor.data.image}} name={doctor.data.fullName} desc={doctor.data.gender} />
                )
            })
        }
       
    </View>
}

const Styles = StyleSheet.create({
    container: {
    backgroundColor: colors.white,
    flex: 1
    }
})

export default ChooseDoctor;