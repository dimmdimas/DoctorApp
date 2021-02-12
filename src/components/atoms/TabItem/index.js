import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconDoctor, IconDoctorActive, IconHospital, IconHospitalActive, IconMessages, IconMessagesActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({ title, active, onLongPress, onPress}) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <IconDoctorActive/> : <IconDoctor/>
        }
        if (title === 'Messages') {
            return active ? <IconMessagesActive/> : <IconMessages/>
        }
        if (title === 'Hospitals') {
            return active ? <IconHospitalActive/> : <IconHospital/>
        }
        return <IconDoctor/>
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress} >
            <Icon/>
            <Text style={styles.text(active)} >{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => (
    {
        fontSize: 10,
        color: active ? colors.text.menuActive : colors.text.MenuInactive,
        fontFamily: fonts.primary[600],
        marginTop: 4    
    })
})
