import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Fonts, colors } from '../../../utils';
import IsMe from './IsMe.js';
import Others from './Others';

const ChatItem = ({isme, text, date, image}) => {
    if(isme){
        return <IsMe text={text} date={date} />
    }else{
        return <Others text={text} date={date} image={image} />
    }
}



export default ChatItem;