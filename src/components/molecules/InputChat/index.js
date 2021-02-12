import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, fonts } from '../../../utils'
import { Tombol } from '../../atoms'

const InputChat = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan" />
            <Tombol type="btn-icon-send" disable />
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        backgroundColor: colors.disable,
        padding: 14,
        flex: 1,
        marginRight: 10,
        borderRadius: 10,
        fontSize: 14,
        fontFamily: fonts.primary.normal,
        maxHeight: 45
    }
})
