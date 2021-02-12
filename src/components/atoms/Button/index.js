import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import BtnIconSend from './BtnIconSend'
import IconOnly from './IconOnly'

const Tombol = ({ type, title, onPress, icon, disable}) => {
    if(type === 'btn-icon-send'){
        return <BtnIconSend disable={disable}/>
    }
    if(type === 'icon-only'){
        return  <IconOnly icon={icon} onPress={onPress}/>
    }
    if(disable){
        return (
            <View style={styles.disableBg}>
                <Text style={styles.disableText}>{title}</Text>
            </View>
        )
    }
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Tombol

const styles = StyleSheet.create({
    container: (type) => ({
        backgroundColor: type === 'secondary' ? colors.button.secondary.background : colors.button.primary.background,
        paddingVertical: 10,
        borderRadius: 10
    }),
    text: (type) => ({
        fontSize: 18,
        textAlign: 'center',
        color: type === 'secondary' ? '#112340' : colors.button.primary.text,
        fontFamily: fonts.primary[600]
    }),
    disableBg: {
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: colors.button.disable.background
    },
    disableText: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: fonts.primary[600],
        color: colors.button.disable.text
    }
})
