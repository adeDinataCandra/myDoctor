import React, { useState, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { Fire } from '../../config';


const EmailVerify = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
        const user = Fire.auth().currentUser;
        setUser(user);
    }, [])

    const verify = () => {
        user.sendEmailVerification().then(function () {
            alert('Verifikasi Email terkirim !')
        }).catch(function (error) {
            console.log(error.message);
        });
    }
    return (
        <>
            <View style={{marginBottom: 20, padding: 30}}>
                <Text>User : {user.email}</Text>
                {
                    user.emailVerified ? <Text>Verify</Text> :  <Text>Not Verify</Text>
                }
            
            </View>
            <Button  title='Verify' onPress={verify} />
        </>
    )
}

export default EmailVerify;