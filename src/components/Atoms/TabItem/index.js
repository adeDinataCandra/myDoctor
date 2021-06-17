import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import { DoctorActive, DoctorUnactive, HospitalActive, HospitalUnactive, MessageActive, MessageUnactive } from '../../../assets';
import { colors, Fonts } from '../../../utils';


const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if (title === 'doctor') {
            return active ? <DoctorActive /> : <DoctorUnactive />
        } else if (title === 'message') {
            return active ? <MessageActive /> : <MessageUnactive />
        } else if (title === 'hospital') {
            return active ? <HospitalActive /> : <HospitalUnactive />
        }else {
            return <DoctorUnactive />
        }
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => ({
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontSize: 13,
        fontFamily: Fonts.primary[600]

    })
})

export default TabItem;