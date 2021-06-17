import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonSend, ButtonSendWhite } from '../../../assets';
import { colors } from '../../../utils';

const BtnSend = ({ disable, onPress }) => {
    if(disable){
        return (
            <View style={Styles.container(disable)} >
                <ButtonSend />
            </View>
        );
    }else{
        return (
            <TouchableOpacity style={Styles.container(disable)} onPress={onPress}>
                <ButtonSendWhite />
            </TouchableOpacity>
        );
    }
}
const Styles = StyleSheet.create({
    container: (disable) => ({
        backgroundColor: disable ? colors.disable : colors.secondary,
        width: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    })
})

export default BtnSend;