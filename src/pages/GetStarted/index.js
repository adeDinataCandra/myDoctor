import React, {useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, View, BackHandler, Alert } from 'react-native';
import { ILLogo, ILGetStarted } from '../../assets';
import { Button, Gap } from '../../components';
import {  colors, Fonts } from '../../utils';


const GetStarted = ({navigation}) => {
    const backActionHandler = () => {
        Alert.alert("Alert!", "Are you sure you want to close this Aplication?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
          },
          { text: "YES", onPress: () => BackHandler.exitApp()
          () }
        ]);
        return true;
      };

      useEffect(() => {

        // Add event listener for hardware back button press on Android
        BackHandler.addEventListener("hardwareBackPress", backActionHandler);
    
        return () =>
          // clear/remove event listener
          BackHandler.removeEventListener("hardwareBackPress", backActionHandler);
      }, []);
    return <ImageBackground source={ILGetStarted} style={styles.page}>
        <View>
            <ILLogo />
            <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
        </View>
        <View>
            <Button title='Get Started' onPress={() => navigation.navigate('Registration')} />
            <Gap height={16} />
            <Button type='secondary' title='Sign in' onPress={() => navigation.navigate('Login')} />
        </View>
    </ImageBackground>
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: colors.background.primary,
        flex: 1
    },
    title: {
        fontSize: 28,
        color: colors.button.primary.text,
        marginTop: 91,
        fontFamily: Fonts.primary[600]
    }
})

export default GetStarted;