import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import { HospitalDua, HospitalParent, HospitalSatu, HospitalTiga } from '../../assets/dummy';
import ListHospital from '../../components/Molekuls/ListHospital';
import {Fonts, colors} from '../../utils';

const Hospital = () => {
return (
    <View style={Styles.page}>
        <ImageBackground source={HospitalParent} style={Styles.background}>
        <Text style={Styles.title}>Nearby Hospital</Text>
        <Text style={Styles.desc}>3 Tersedia</Text>
        </ImageBackground>
        <View style={Styles.content}>
            <ListHospital type='Rumah Sakit' name='RS Insan Permata Satu' pic={HospitalSatu} address='Jl Pamulang Dua Sektor Satu Tangerang Selatan'  />
            <ListHospital type='Rumah Sakit Anak' name='RS Melia Nature Sejahtra' pic={HospitalDua} address='Jl Amil Muri No 3 Jakarta Selatan'  />
            <ListHospital type='Rumah Sakit Umum' name='RSUD Tangerang Kota' pic={HospitalTiga} address='Jl KH Jasmin Purdido No 11 Tangerang Selatan'  />
            
        </View>
    </View>
);
}

const Styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    background: {
        height: 240,
        paddingTop: 30
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderBottomWidth: 1,
        borderRadius: 20,
        marginTop: -30,
        paddingTop: 14
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.primary[600],
        color: colors.white,
        textAlign: 'center'
    },
    desc: {
        fontSize: 14,
        fontFamily: Fonts.primary[300],
        color: colors.white,
        marginTop: 6,
        textAlign: 'center'
    }
})


export default Hospital;