import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { ChatItem, Header, InputChat } from '../../components';
import { colors, Fonts, getChatTime, getData, setDateChat } from '../../utils';
import { Fire } from '../../config';
import { showError } from '../../utils';

const Chating = ({ navigation, route }) => {
    const dataDoctor = route.params;
    const [chat, setChat] = useState('');
    const [user, setUser] = useState({});
    const [dataChat, setDataChat] = useState([]);

    useEffect(() => {
        getDataUserFromLocal();
        const chatID = `${user.uid}_${dataDoctor.data.uid}`;
        const urlFirebase = `chatting/${chatID}/allChat/`;
        Fire.database()
        .ref(urlFirebase)
        .on('value', snapsot => {
            console.log('data chat old:', snapsot.val());
            if(snapsot.val()){
                const oldData = snapsot.val();
                const allDataChat = [];
                Object.keys(oldData).map(key => {
                    const dataChat = oldData[key];
                    const newDataChat = [];
                    Object.keys(dataChat).map(itemChat => {
                        newDataChat.push({
                            id: itemChat,
                            data: dataChat[itemChat]
                        })
                    })
                    allDataChat.push({
                        id: key,
                        data: newDataChat
                    })
                })
                console.log('data chat new', allDataChat);
                setDataChat(allDataChat);
            }
        })
        
    }, [dataDoctor.data.uid, user.uid]);

    const getDataUserFromLocal = () => {
        getData('user').then(res => {
            setUser(res);
        });
    }

    const sendMessage = () => {
        const today = new Date();
        const data = {
            sendBy: user.uid,
            chatDate: new Date().getTime(),
            chatTime: getChatTime(today),
            chatContent: chat
        }
        const chatID = `${user.uid}_${dataDoctor.data.uid}`;
        const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;
        const urlMessagesUser = `messages/${user.uid}/${chatID}`;
        const urlMessagesDoctor = `messages/${dataDoctor.data.uid}/${chatID}`;

        const dataHystoryForUser = {
            lastContentChat: chat,
            lastChatDate: today.getTime(),
            uidPartner: dataDoctor.data.uid
        }

        const dataHystoryForDoctor = {
            lastContentChat: chat,
            lastChatDate: today.getTime(),
            uidPartner: user.uid
        }

        // kirim data pesan
        Fire.database()
            .ref(urlFirebase)
            .push(data)
            .then(success => {
                // set data for user
                Fire.database()
                .ref(urlMessagesUser)
                .set(dataHystoryForUser)

                // set Data for doctor
                Fire.database()
                .ref(urlMessagesDoctor)
                .set(dataHystoryForDoctor)
                setChat('');
            })
            .catch(err => {
                showError(err.message);
            })
    }

    return (
        <View style={Styles.container}>
            <Header avatar={{ uri: dataDoctor.data.photo }} type='dark-profile' title={dataDoctor.data.fullName} category={dataDoctor.data.category} onPress={() => navigation.goBack()} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={Styles.content}>
                    {
                        dataChat.map(chat => {
                            return (
                                <View key={chat.id}>
                                    <Text style={Styles.textDate}>{chat.id}</Text>
                                    {
                                        chat.data.map(itemChat => {
                                            const isMe = itemChat.data.sendBy === user.uid;
                                            return <ChatItem
                                            key={itemChat.id}
                                            isme={isMe}
                                            text={itemChat.data.chatContent}
                                            date={itemChat.data.chatTime}
                                            image={isMe ? 'null' : {uri: dataDoctor.data.photo}}
                                            />
                                        })
                                    }
                                </View>
                            );
                        })
                    }

                </View>
            </ScrollView>
            <InputChat value={chat} onChangeText={(value) => setChat(value)} onPress={sendMessage} />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    content: {
        flex: 1
    },
    textDate: {
        textAlign: 'center',
        padding: 20,
        fontFamily: Fonts.primary.normal,
        color: colors.text.secondary,
        fontSize: 13
    }
})

export default Chating;