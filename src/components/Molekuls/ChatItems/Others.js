import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors, Fonts } from '../../../utils';

const Others = ({text, date, image}) => {
    return (
        <View style={Styles.container}>
            <Image source={image} style={Styles.avatar} />
            <View>
                <View style={Styles.content}>
                    <Text style={Styles.textChat}>{text}</Text>
                </View>
                <Text style={Styles.date}>{date}</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    content: {
        maxWidth: '90%',
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
    },
    textChat: {
        fontSize: 14,
        fontFamily: Fonts.primary.normal,
        color: colors.white,
    },
    date: {
        fontSize: 11,
        fontFamily: Fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 8
    },
    container: {
        marginBottom: 20,
        alignItems: 'flex-end',
        paddingLeft: 16,
        flexDirection: 'row'
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 40 / 2,
        marginRight: 10
    }

})

export default Others;