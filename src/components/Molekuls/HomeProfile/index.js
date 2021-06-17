import React, { useEffect } from 'react';
import { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { User } from '../../../assets';
import { colors, Fonts, getData } from '../../../utils';

const HomeProfile = ({ onPress }) => {
    const [profile, setProfile] = useState({
        image: User,
        fullName: '',
        pekerjaan: ''
    });

    useEffect(() => {
        getData('user')
            .then(res => {
                // console.log('data user:', res);
                const data = res;
                data.image = { uri: res.image };
                // console.log('new image:', data);
                setProfile(res);
            });
    }, []);
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.image} style={styles.profile} />
            <View style={styles.text}>
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.profesi}>{profile.pekerjaan}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    text: {
        justifyContent: 'center',
    },
    name: {
        fontSize: 17,
        fontFamily: Fonts.primary[600],
        color: colors.text.primary,
        textTransform: 'capitalize'
    },
    profesi: {
        fontSize: 13,
        fontFamily: Fonts.primary[400],
        color: colors.text.secondary,
        textTransform: 'capitalize'
    },
    profile: {
        marginRight: 10,
        height: 60,
        width: 60,
        borderRadius: 60/2
    }
})

export default HomeProfile;