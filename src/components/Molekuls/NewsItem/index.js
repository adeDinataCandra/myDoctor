import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { News } from '../../../assets';
import { colors, Fonts } from '../../../utils';

const NewsItem = ({avatar, title, day}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textWraper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date} >{day}</Text>
            </View>
            <Image source={avatar} style={styles.avatar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.primary[600],
        color: colors.text.primary,
        maxWidth: '90%'
    },
    date: {
        fontSize: 12,
        fontFamily: Fonts.primary.normal,
        color: colors.text.secondary,
        marginTop: 4
    },
    avatar: {
        width: 80,
        height: 60,
        borderRadius: 11
    },
    textWraper: {
        flex: 1,
    }
})

export default NewsItem;