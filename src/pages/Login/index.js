import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ILLogo } from '../../assets';
import { Button, Gap, Input, Link } from '../../components/Atoms';
import { Fire } from '../../config';
import { colors, Fonts, storeData, useForm } from '../../utils';
import { useDispatch } from 'react-redux';
import { showError } from '../../utils/showMessage';


const Login = ({ navigation }) => {
    // memanggil fungsi useForm dari utils untuk mengelola stateForm
    const [form, setForm] = useForm({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    // ketika button login di click
    const actionLogin = () => {
        // reset form agar bersih
        // setForm('reset');
        dispatch({
            type: 'SET_LOADING',
            value: true
        });
        // membuat fungsi auth login menggunakan email dan password
        Fire.auth().signInWithEmailAndPassword(form.email, form.password)
            .then(res => {
                // ketika login berhasil
                // setloading dari redux
                dispatch({
                    type: 'SET_LOADING',
                    value: false
                });
                // fungsi menangkap data yang login berdasarkan uid
                Fire.database()
                    .ref(`users/${res.user.uid}/`)
                    .once('value')
                    .then(resDb => {
                        if (resDb.val()) {
                                // jika data succes di ambil, lalu simpan ke file storage untuk digunakan di mainApp
                                storeData('user', resDb.val());
                                // berpindah halaman
                                navigation.replace('MainApp');
                        }
                    });
            }).catch(err => {
                dispatch({
                    type: 'SET_LOADING',
                    value: false
                });
                // jika error tampilkan pesan error, dari utils
                showError(err.message);
            })
    }

    return (
        <>
            <View style={styles.page}>
                <ILLogo />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
                    <Input title='Email Address' value={form.email} onChangeText={value => setForm('email', value)} />
                    <Gap height={24} />
                    <Input title='Password' secureTextEntry={true} value={form.password} onChangeText={value => setForm('password', value)} />
                    <Gap height={10} />
                    <Link title='Forgot My Password' size={12} />
                    <Gap height={40} />
                    <Button title='Sign In' onPress={actionLogin} />
                    <Gap height={30} />
                    <Link title='Create New Account' size={16} align='center' onPress={() => navigation.replace('Registration')} />
                </ScrollView>
            </View>
        </>
    )

}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: colors.background.primary,
        flex: 1
    },
    title: {
        fontSize: 19,
        fontFamily: Fonts.primary[600],
        color: colors.secondary,
        marginTop: 40,
        marginBottom: 40,
        maxWidth: 153
    }
})

export default Login;