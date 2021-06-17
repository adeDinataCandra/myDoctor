import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Gap, Input, Header, Loading } from '../../components';
import { Fire } from '../../config';
import { colors, storeData, useForm } from '../../utils';
import { showError } from '../../utils/showMessage';
import {useDispatch} from 'react-redux';


const Registration = ({ navigation}) => {
    // memanggil fungsi useForm di utils untuk management state
    const [form, setForm] = useForm({
        fullName: '',
        pekerjaan: '',
        email: '',
        password: ''
    });
    const dispatch = useDispatch();

    // membuat fungsi input data
    const OnContinue = () => {
        // calling API Here
        console.log(form);
        // set Loading menjadi true jika data nya belum masuk
        dispatch({
            type: 'SET_LOADING',
            value: true
        });
        // input data email dan password ke firebas
        Fire.auth()
            .createUserWithEmailAndPassword(form.email, form.password)
            .then(success => {
                dispatch({
                    type: 'SET_LOADING',
                    value: false
                });
                const data = {
                    fullName: form.fullName,
                    pekerjaan: form.pekerjaan,
                    email: form.email,
                    uid: success.user.uid
                };
                // input data user yg lain ke database realtime ke firebase
                Fire.database()
                    .ref('users/' + data.uid + '/')
                    .set(data);
                    console.log(data);
                    // menjalankan fungsi storeData yang di panggil dari utils, simpan ke local storage
                storeData('user', data);
                // reset form agar bersih, fungsi ini ada di utils
                setForm('reset');
                navigation.navigate('UploadPhoto', data);
            })
            // Handle jika registrasi gagal
            .catch(error => {
                dispatch({
                    type: 'SET_LOADING',
                    value: false
                });
                // membuat fungsi alert menggunakan library flash message, di utils
                showError(error.message);
            });
    }

    return (
        <>

            <View style={styles.page}>
                <Header title='Registration Page' onPress={() => navigation.goBack()} />
                <View style={styles.content}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Input title='Full Name' value={form.fullName} onChangeText={(value) => setForm('fullName', value)} />
                        <Gap height={20} />
                        <Input title='Pekerjaan' value={form.pekerjaan} onChangeText={(value) => setForm('pekerjaan', value)} />
                        <Gap height={20} />
                        <Input title='Email' value={form.email} onChangeText={(value) => setForm('email', value)} />
                        <Gap height={20} />
                        <Input title='Password' value={form.password} onChangeText={(value) => setForm('password', value)} secureTextEntry={true} />
                        <Gap height={40} />
                        <Button title='continue' onPress={OnContinue} />
                    </ScrollView>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 40,
        paddingTop: 0
    },
    page: {
        backgroundColor: colors.background.primary,
        flex: 1
    }
})

export default Registration;