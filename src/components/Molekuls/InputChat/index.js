import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../../utils';
import { Button, Gap } from '../../Atoms';

const InputChat = ({onChangeText, onPress, value}) => {
    return (
        <View style={Styles.container}>
            <TextInput placeholder='Write Text ...' style={Styles.textInput} value={value} onChangeText={onChangeText} />
            <Gap width={10} />
            <Button type='btn-send' disable= {value.length < 1} onPress={onPress} />
        </View>
    )
}

const Styles = StyleSheet.create({
    textInput: {
        backgroundColor: colors.disable,
        padding: 14,
        borderRadius: 10,
        flex: 1
    },
    container: {
        flexDirection: 'row',
        padding: 16,
        backgroundColor: colors.white
    }
})

export default InputChat;