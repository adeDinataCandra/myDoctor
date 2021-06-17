import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import {colors, Fonts} from '../../../utils';

const ListHospital = ({type, name, address, pic}) => {
    return (
        <View style={Styles.container}>
            <Image source={pic} style={Styles.picture} />
            <View>
                <Text style={Styles.title}>{type}</Text>
                <Text style={Styles.title}>{name}</Text>
                <Text style={Styles.alamat}>{address}</Text>
            </View>

        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center',
    },
    picture: {
        width: 80,
        height: 70,
        borderRadius: 10,
        marginRight: 20
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.primary.normal,
        color: colors.text.primary
    },
    alamat: {
        fontSize: 12,
        fontFamily: Fonts.primary[300],
        color: colors.text.secondary,
        marginTop: 6,
        maxWidth: '90%'
    }
})

export default ListHospital;