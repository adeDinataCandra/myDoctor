import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ArrowNext, Help, Language, ProfileUpdate, RateStar } from '../../../assets';
import { colors, Fonts } from '../../../utils';


const List = ({pic, name, desc, type, onPress, icon}) => {
    const Icon = () => {
        if(icon === 'update'){
            return <ProfileUpdate />
        }else if(icon === 'star'){
           return <RateStar />
        }else if(icon === 'language'){
            return <Language />
        }else if(icon === 'help'){
            return <Help />
        }else{
            return <ProfileUpdate />
        }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {icon ? <Icon /> :  <Image source={pic} style={styles.avatar} /> }
            <View style={styles.textWraper}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type === 'next' && <ArrowNext />
            }
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2
    },
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        alignItems: 'center',
        borderBottomColor: colors.border,
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 15,
        fontFamily: Fonts.primary.normal,
        color: colors.text.primary
    },
    desc: {
        fontSize: 12,
        fontFamily: Fonts.primary[300],
        color: colors.text.secondary,
        marginTop: 4,
        maxWidth: 250
    },
    textWraper: {
        flex: 1,
        marginLeft: 16
    }
})


export default List;