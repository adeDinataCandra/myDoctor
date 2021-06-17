import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Doctor3 } from '../../../assets';
import { colors, Fonts } from '../../../utils';
import { Button } from '../../Atoms';

const DarkProfile = ({title, category, onPress, avatar}) => {
    return (
        <View style={Styles.container}>
            <Button type='icon-only' icon='back-light' onPress={onPress} />
            <View style={Styles.content}>
               <Text style={Styles.name}>{title}</Text>
               <Text style={Styles.category}>{category}</Text>
            </View>
            <Image source={avatar} style={Styles.avatar} />
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        paddingVertical: 30,
        paddingLeft: 20,
        paddingRight: 16,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
        flex: 1
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2
    },
    name: {
        color: colors.white,
        fontSize: 18,
        fontFamily: Fonts.primary[600],
        textAlign: 'center'
    },
    category: {
        fontSize: 14,
        fontFamily: Fonts.primary.normal,
        marginTop: 6,
        color: colors.text.secondary,
        textAlign: 'center'
    }
})

export default DarkProfile;