import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { PlusIcon, ILProfile, Remove } from '../../assets';
import { Button, Gap, Header, Link } from '../../components';
import { colors, Fonts, storeData } from '../../utils';
import ImagePicker from 'react-native-image-picker';

import { showMessage } from 'react-native-flash-message';
import { Fire } from '../../config';

const UploadPhoto = ({ navigation, route }) => {

    // menangkap parameter menggunakan props route, yg di kirimkan oleh halaman registrasi
    const { fullName, pekerjaan, uid } = route.params;
    // membuat state dinamis untuk poto
    const [hasPhoto, setHasPhoto] = useState(false);
    // membuat state poto untuk lempar ke komponen image
    const [photo, setPhoto] = useState(ILProfile);
    // membuat state image yg akan di upload
    const [imageUpload, setImageUpload] = useState('');

    // membuat fungsi agar bisa ambil image ke library handpone
    const getImage = () => {
        // Open Image Library:
        ImagePicker.launchImageLibrary({
            quality: 0.5,
            maxWidth: 300,
            maxHeight: 300
        }, (response) => {
            if (response.didCancel || response.error) {
                showMessage({
                    message: 'Oops, sepertinya anda tidak memilih photonya !',
                    type: 'default',
                    backgroundColor: colors.errorMessage,
                    color: colors.white
                });
            } else {
                console.log('response getImage :', response);
                // setData ke variabel imageUpload
                setImageUpload(`data:${response.type};base64, ${response.data}`);
                const source = { uri: response.uri };
                setPhoto(source);
                setHasPhoto(true);
            }
        });
    }

    const UploadContinue = () => {
        // fungsi upload photo
        // roule atau aturanya : data:type;base64, data
        Fire.database()
            .ref('users/'+uid+'/')
            .update({ image: imageUpload });
            const data = route.params;
            data.image = imageUpload;
            storeData('user', data);
            navigation.replace('MainApp');
       
    }

    // component view yg ditampilkan
    return <View style={styles.page}>
        <Header title='Upload Photo' />
        <View style={styles.content}>
            <View style={styles.profile}>
                <TouchableOpacity style={styles.avatarWraper} onPress={getImage}>
                    <Image source={photo} style={styles.avatar} />
                    <View style={styles.wraperIcon}>
                        {hasPhoto && <Remove style={styles.icon} />}
                        {!hasPhoto && <PlusIcon style={styles.icon} />}
                    </View>
                </TouchableOpacity>
                <Text style={styles.name}>{fullName}</Text>
                <Text style={styles.profesi}>{pekerjaan}</Text>
            </View>
            <View>
                <Button title='Upload And Continue' onPress={UploadContinue} disable={!hasPhoto} />
                <Gap height={30} />
                {/* <Link title='Skip For This' align='center' size={16} onPress={cekVerifikasi} /> */}
            </View>
        </View>
    </View>
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    content: {
        paddingHorizontal: 40,
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: 64
    },
    avatarWraper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border.primary,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.white
    },
    name: {
        color: colors.text.primary,
        fontSize: 24,
        fontFamily: Fonts.primary[600],
        textAlign: 'center'
    },
    profesi: {
        fontSize: 18,
        fontFamily: Fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    wraperIcon: {
        backgroundColor: colors.white,
        height: 30,
        width: 30,
        position: 'absolute',
        bottom: 15,
        right: 10,
        padding: 5,
        borderRadius: 30 / 2
    }
});


export default UploadPhoto;