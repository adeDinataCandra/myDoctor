import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {colors} from '../../utils';
import {ILLogo} from '../../assets';
import {Fire} from '../../config';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        // menggunakan fungsi session dari firebase, apakah user sudah pernah login atau belm
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 2000);
    });
    return () => unsubscribe();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ILLogo />
      <View style={styles.sparator}></View>
      <Text style={styles.text}>My Doctor</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background.primary,
  },
  sparator: {
    height: 10,
  },
});

export default SplashScreen;
