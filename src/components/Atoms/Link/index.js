import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Link = ({title, size, align, onPress}) => {
    return <TouchableOpacity onPress={onPress}>
        <Text style={styles.text(size, align)}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    text: (size, align) => ({
        fontSize: size,
        color: '#7D8797',
        fontFamily: 'Nunito-Regular',
        textDecorationLine: 'underline',
        textAlign: align
    })
})

export default Link;