import React from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { colors, Fonts } from '../../../utils';

const Loading = () => {
    return (
        <View style={Styles.container}>
            <ActivityIndicator size='large' color={colors.primary} />
            <Text style={Styles.text}>Loading...</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: colors.LoadingBackground,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    text: {
        fontSize: 16,
        marginTop: 16,
        fontFamily: Fonts.primary[600],
        color: colors.primary
    }
})

export default Loading;