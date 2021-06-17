import React from 'react';
import { TouchableOpacity } from 'react-native';
import {BackDark, BackWhite} from '../../../assets';

const IconsOnly = ({ onPress, icon }) => {
    const Icon = () => {
        if (icon === 'dark-back') {
            return <BackDark />
        } 
        if (icon === 'back-light') {
            return <BackWhite />
        }
        return <BackDark />
    };
    return <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
}

export default IconsOnly;