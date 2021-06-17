import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Star } from '../../../assets/icons';
import {colors, Fonts} from '../../../utils';

const RatedDoctor = ({onPress, name, desc, pic}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style={styles.avatar} source={pic} />
            <View style={styles.wraperText}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.category}>{desc}</Text>
            </View>
            <View style={styles.rate}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        alignItems: 'center'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 10
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wraperText: {
     justifyContent: 'center',
     flex: 1
    },
    name: {
        fontSize: 14,
        fontFamily: Fonts.primary[600],
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: Fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 2
    }
})

export default RatedDoctor;