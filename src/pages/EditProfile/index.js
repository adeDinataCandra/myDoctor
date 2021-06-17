import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { ILProfile } from '../../assets';
import { Button, Header, Input, Profile, Gap } from '../../components';
import { Fire } from '../../config';
import { colors, getData, storeData, showError } from '../../utils';
// import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

const EditProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        fullName: '',
        pekerjaan: '',
        email: '',
    });

    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(ILProfile);
    const [photoForDB, setPhotoForDB] = useState('');

    useEffect(() => {
        getData('user').then(res => {
            const data = res;
            setPhoto({ uri: res.image });
            setProfile(data);
        })
    }, [])

    const update = () => {
        if (password.length > 0) {
            if (password.length < 6) {
                showError('Password kurang dari 6 karakter !');
            } else {
                // ubah password dan data
                updatePassword();
                updateProfileData();
                navigation.replace('MainApp');
            }

        } else {
            // update data tanpa password
            updateProfileData();
            navigation.replace('MainApp');
        }
    }

    const updatePassword = () => {
        Fire.auth()
        .onAuthStateChanged(user => {
            if (user) {
                user.updatePassword(password).catch(err => {
                    showError(err.message);
                })
            }
        })
    }

    const updateProfileData = () => {
        console.log(profile);
        const data = profile;
        if (photoForDB) {
            data.image = photoForDB;
        }
        Fire.database()
                .ref(`users/${profile.uid}`)
                .update(profile)
                .then(() => {
                    console.log('Success :', data);
                    storeData('user', data);
                })
                .catch(err => {
                    showError(err.message);
                });
    }

    const getImage = () => {
        ImagePicker.launchImageLibrary({
            quality: 0.5,
            maxWidth: 300,
            maxHeight: 300
        }, (response) => {
            if (response.didCancel || response.error) {
                showError('Oops, sepertinya anda tidak memilih photonya !');
            } else {
                console.log('response getImage :', response);
                // setData ke variabel imageUpload
                setPhotoForDB(`data:${response.type};base64, ${response.data}`);
                const source = { uri: response.uri };
                setPhoto(source);
            }
        });

       
    }

    const changeText = (key, value) => {
        setProfile({
            ...profile,
            [key]: value
        })
    }

    return (
        <View style={Styles.container}>
            <Header title='Edit Profile' onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.content}>
                    <Profile isRemove name={profile.name} desc={profile.pekerjaan} image={photo} onPress={getImage} />
                    <Gap height={24} />
                    <Input title='Nama Lengkap' value={profile.fullName} onChangeText={(value) => changeText('fullName', value)} />
                    <Gap height={24} />
                    <Input title='Pekerjaan' value={profile.pekerjaan} onChangeText={(value) => changeText('pekerjaan', value)} />
                    <Gap height={24} />
                    <Input title='Email' value={profile.email} disable />
                    <Gap height={24} />
                    <Input title='Password' value={password} secureTextEntry onChangeText={(value) => setPassword(value)} />
                    <Gap height={24} />
                    <Button title='Save Profile' onPress={update} />
                </View>
            </ScrollView>
        </View>
    );
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        padding: 40,
        paddingTop: 0
    }
})

export default EditProfile;