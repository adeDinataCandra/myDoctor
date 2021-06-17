import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { colors } from '../../../utils';

const Input = ({ title, placeholder, value, onChangeText, secureTextEntry, disable }) => {
    const [border, setBorder] = useState(colors.border)
    const onFocusForm = () => {
        setBorder(colors.primary)
    }
    const onBlurForm = () => {
        setBorder(colors.border)
    }
    return <View>
        <Text style={styles.text}>{title}</Text>
        <TextInput
            onFocus={onFocusForm}
            onBlur={onBlurForm}
            style={styles.input(border)}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            editable={!disable}
            selectTextOnFocus={!disable}
        />
    </View>
}

const styles = StyleSheet.create({
    input: (border) => (
        {
            borderWidth: 1,
            borderColor: border,
            borderRadius: 10,
            padding: 12
        }
    ),
    text: {
        fontSize: 16,
        color: colors.text.primary,
        marginBottom: 6,
        fontFamily: 'Nunito-Regular'
    }
});

export default Input;