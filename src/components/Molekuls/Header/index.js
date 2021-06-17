import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils';
import { Button, Gap } from '../../Atoms';
import DarkProfile from './DarkProfile.js';

const Header = ({ title, onPress, type, category, avatar }) => {
    if(type === 'dark-profile'){
        return <DarkProfile title={title} category={category} onPress={onPress} avatar={avatar}  />
    }
    return <View style={styles.container(type)}>
        <Button type='icon-only' icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress} />
        <Text style={styles.text(type)}>{title}</Text>
        <Gap width={24} />
    </View>
}

const styles = StyleSheet.create({
    container: (type) => (
        {
            backgroundColor: type === 'dark' ? colors.secondary : colors.white,
            paddingHorizontal: 16,
            paddingVertical: 30,
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomLeftRadius: type === 'dark' ? 20 : 0,
            borderBottomRightRadius: type === 'dark' ? 20 : 0
        }
    ),
    text: (type) => ({
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'Nunito-SemiBold',
        color:  type === 'dark' ? colors.white : colors.text.primary
    })
})

export default Header;