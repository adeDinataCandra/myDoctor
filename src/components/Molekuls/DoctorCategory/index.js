import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CatDokObat, CatDokPsikiater, CatDokUmum } from '../../../assets';
import { colors, Fonts } from '../../../utils';

const DoctorCategory = ({ category, onPress }) => {
    const Icon = () => {
        if (category === 'dokter umum') {
            return (
                <CatDokUmum style={styles.ilustrations} />
            );
        }
        if (category === 'psikiater') {
            return (
                <CatDokPsikiater style={styles.ilustrations} />
            );
        }
        if (category === 'dokter obat') {
            return (<CatDokObat style={styles.ilustrations} />
            );
        }
        return <CatDokUmum style={styles.ilustrations} />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: colors.cardLight,
        alignSelf: 'flex-start',
        borderRadius: 10,
        marginRight: 10,
        width: 100,
        height: 130
    },
    ilustrations: {
        marginBottom: 28
    },
    label: {
        fontSize: 12,
        fontFamily: Fonts.primary[600],
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: Fonts.primary[600],
        color: colors.text.primary
    }
})

export default DoctorCategory;