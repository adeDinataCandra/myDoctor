import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Remove } from '../../../assets';
import { colors, Fonts } from '../../../utils';

const Profile = ({ name, desc, isRemove, image, onPress }) => {
    return (
        <View style={Styles.container}>
            {
                isRemove && (
                    <TouchableOpacity style={Styles.borderProfile} onPress={onPress}>
                        <Image source={image} style={Styles.avatar} />
                        {
                            isRemove && (
                                <View style={Styles.wraperRemove}>
                                    <Remove style={Styles.removeIcon} />
                                </View>
                            )}
                    </TouchableOpacity>
                )}

            {
                !isRemove && (
                    <View style={Styles.borderProfile}>
                        <Image source={image} style={Styles.avatar} />
                    </View>

                )}

            {
                name && (
                    <View>
                        <Text style={Styles.name}>{name}</Text>
                        <Text style={Styles.profesi}>{desc}</Text>
                    </View>
                )}
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        fontSize: 20,
        fontFamily: Fonts.primary[600],
        color: colors.text.primary,
        marginTop: 16,
        textAlign: 'center'
    },
    profesi: {
        fontSize: 16,
        fontFamily: Fonts.primary[600],
        color: colors.text.secondary,
        marginTop: 2,
        textAlign: 'center'
    },
    removeIcon: {

    },
    wraperRemove: {
        position: 'absolute',
        right: 12,
        bottom: 20,
        backgroundColor: colors.white,
        width: 25,
        height: 25,
        borderRadius: 25 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Profile;