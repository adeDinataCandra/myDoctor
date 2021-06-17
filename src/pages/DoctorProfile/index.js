import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';
import { colors } from '../../utils';

const DoctorProfile = ({navigation, route}) => {
    const dataDoctor = route.params;
    return (
        <View style={Styles.container}>
            <Header title=" Doctor Profile" onPress={() => navigation.goBack()} />
            <Profile image={{uri: dataDoctor.data.photo}} name={dataDoctor.data.fullName} desc={dataDoctor.data.category} />
            <Gap height={10} />
            <ProfileItem label='Alumnus' value={dataDoctor.data.university} />
            <ProfileItem label='Tempat Praktik' value={dataDoctor.data.hospital_address} />
            <ProfileItem label='No STR' value={dataDoctor.data.str_number} />
            <View style={Styles.action}>
                <Button title=' Start Consultation' onPress={() => navigation.navigate('chating', dataDoctor)} />
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23
    }
})

export default DoctorProfile;