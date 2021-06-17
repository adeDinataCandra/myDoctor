import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {colors, Fonts} from '../../../utils';

const ProfileItem = ({label, value}) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.label}>{label}</Text>
            <Text style={Styles.value}>{value}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border
    },
    label: {
        fontSize: 14,
        fontFamily: Fonts.primary.normal,
        color: colors.text.secondary,
        marginBottom: 8,
    },
    value: {
        fontSize: 14,
        fontFamily: Fonts.primary.normal,
        color: colors.text.primary
    }
})

export default ProfileItem;