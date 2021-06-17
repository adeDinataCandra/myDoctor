import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { colors, getData } from '../../utils';
import { Gap, Header, List, Profile } from '../../components';
import { useEffect } from 'react/cjs/react.development';
import { ILProfile } from '../../assets';
import { showMessage } from 'react-native-flash-message';
import { Fire } from '../../config';

const UserProfile = ({ navigation }) => {
    // membuat state untuk mengelola data profile
    const [dataProfile, setDataProfile] = useState({
        fullName: '',
        pekerjaan: '',
        image: ILProfile
    });

    // mengunakan fungsi useEffect untuk mengambil data dari local storage
    useEffect(()=>{
        getData('user')
        .then(res => {
            console.log(`Success : ${res.fullName}`);
            const data = res;
            data.image = {uri: res.image};
            setDataProfile(data);
        });
    }, []);

    const logOut = () => {
        Fire.auth()
        .signOut()
        .then(() => {
            console.log('Logout Success !');
            navigation.replace('GetStarted');
        })
        .catch(err => {
            showMessage({
                message: err.message,
                type: 'default',
                backgroundColor: colors.errorMessage,
                color: colors.white
            })
        })
    }
    return (
        <View style={Styles.page}>
            <Header title='Profile' onPress={() => navigation.goBack()} />
            <Gap height={10} />
            {/* cek kondisi apakah fullname tidak ada isi (kosong) atau ada isinya */}
            {dataProfile.fullName.length > 0 && (
                <Profile name={dataProfile.fullName} desc={dataProfile.pekerjaan} image={dataProfile.image} />
            )}
            <Gap height={14} />
            <List name='Edit Profile' desc='Last Update Yesterday' type='next' icon='update' onPress={() => navigation.navigate('EditProfile')} />
            <List name='Language' desc='Last Update Yesterday' type='next' icon='language' />
            <List name='Give Use Rate' desc='Last Update Yesterday' type='next' icon='star' />
            <List name='Sign Out' type='next' icon='help' onPress={logOut}  />

        </View>
    );
}

const Styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    name: {
        fontSize: 20
    }
})

export default UserProfile;