import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ILCatObat, ILCatPsikiater, ILCatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({ category, onPress}) => {
    const Icon = () => {
        if(category === 'dokter umum') {
            return <ILCatUmum style={styles.ILU} />    
        }
        if(category === 'psikiater'){
            return <ILCatPsikiater style={styles.ILU} />
        }
        if(category === 'dokter obat'){
            return <ILCatObat style={styles.ILU} />
        }
        return <ILCatUmum style={styles.ILU} />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon/>
            <Text style={styles.label}>DoctorCategory</Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity>
    )
}

export default DoctorCategory

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
    ILU: {
        marginBottom: 20
    },
    label: {
        fontSize: 10,
        fontFamily: fonts.primary[300],
        color: colors.text.primary
    },
    category: {
        fontSize: 12,
        fontFamily: fonts.primary[600],
        color: colors.text.primary
    }
});
