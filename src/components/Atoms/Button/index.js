import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {colors} from '../../../utils';
import IconsOnly from './IconsOnly';
import BtnSend from './BtnSend.js';

const Button = ({ type, title, onPress, icon, disable }) => {
    if(type === 'btn-send'){
        return <BtnSend disable={disable} onPress={onPress} />
    }
    if(type === 'icon-only'){
        return <IconsOnly icon={icon} onPress={onPress} />
    }
    if(disable){
        return <View style={styles.disableBg} >
        <Text style={styles.disableText}>{title}</Text>
    </View>
    }
    return <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? 'white' : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10
    }),
    text: (type) => ({
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center',
        color: type === 'secondary' ? colors.text.primary : colors.button.primary.text
    }),
    disableBg: {
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.button.disable.background
    },
    disableText: {
        fontSize: 18,
        fontFamily: 'Nunito-SemiBold',
        textAlign: 'center',
        color: colors.button.disable.text
    }
})

export default Button;