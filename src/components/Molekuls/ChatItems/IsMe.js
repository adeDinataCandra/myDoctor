import React from 'react';
import { Text, View , StyleSheet} from 'react-native';
import {colors, Fonts} from '../../../utils';

const IsMe = ({text, date}) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.content}>
                <Text style={Styles.textChat}>{text}</Text>
            </View>
            <Text style={Styles.date}>{date}</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    content: {
        maxWidth: '80%',
        borderRadius: 10,
        borderBottomRightRadius: 0,
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.cardLight,
    },
    textChat: {
        fontSize: 14,
        fontFamily: Fonts.primary.normal,
        color: colors.text.primary,
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
        paddingRight: 16
    }
    
})

export default IsMe;