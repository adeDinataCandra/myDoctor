import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { List } from '../../components';
import { colors, Fonts, getData } from '../../utils';
import {Fire} from '../../config';

const Message = ({navigation}) => {
    const [historyChat, setHistoryChat] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        getDataUserFromLocal();
        const rootDB = Fire.database().ref();
         const urlHistory = `messages/${user.uid}/`;
         const messagesDB = rootDB.child(urlHistory);

         messagesDB.on('value', async snapshot => {
             console.log('data hsitory:', snapshot.val());
             if(snapshot.val()){
                 const oldData = snapshot.val();
                 const data = [];

                 const promises = await Object.keys(oldData).map( async key => {
                    const urlUidDcotor = `doctors/${oldData[key].uidPartner}`;
                   const detailDoctor = await rootDB.child(urlUidDcotor).once('value');
                   console.log('detail dokter:', detailDoctor.val());
                     data.push({
                         id: key,
                         detailDoctor: detailDoctor.val(),
                         ...oldData[key]
                     })
                 })

                 await Promise.all(promises);
                 console.log('New Data Histori', data);
                 setHistoryChat(data);
             }
             

         })
        // const rootDB = Fire.database().ref();
        // const urlHistory = `messages/${user.uid}/`;
        // const messagesDB = rootDB.child(urlHistory);
        //  // konsep join
        // messagesDB.on('value', async snapsot => {
        //     console.log('Data hustori', snapsot.val());
        //     if(snapsot.val()){
        //         const oldData = snapsot.val();
        //         const data = [];

        //       const promises = await Object.keys(oldData).map( async key => {
        //             const urlUidDcotor = `doctors/${oldData[key].uidPartner}`;
        //             const detailDoctor = await rootDB.child(urlUidDcotor).once('value');
        //             // console.log('detail doctors', detailDoctor.val());
        //             data.push({
        //                 id: key,
        //                 detailDoctor: detailDoctor.val(),
        //                 ...oldData[key]
        //             });
        //         });

        //         await Promise.all(promises);
        //         console.log(data);
        //         setDoctors(data);
        //     }
        // })
    }, [user.uid])

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res);
        })
    }
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}>Messages</Text>
                {
                    historyChat.map(chat => {
                        const dataDoctor = {
                            id: chat.detailDoctor.uid,
                            data: chat.detailDoctor,
                        }
                        return  <List
                        key={chat.uidPartner}
                        pic={{uri: chat.detailDoctor.photo}}
                        name={chat.detailDoctor.fullName}
                        desc={chat.lastContentChat} onPress={() => navigation.navigate('chating', dataDoctor)} />
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1
    },
    content: {
        backgroundColor: colors.white,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        fontSize: 20,
        fontFamily: Fonts.primary[600],
        color: colors.text.primary,
        marginTop: 60,
        marginLeft: 16
    }
})

export default Message;