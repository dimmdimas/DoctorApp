import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { colors, fonts, getData } from '../../../utils'

const HomeProfile = ({ onPress}) => {
    const [profile, setprofile] = useState({
        photo: ILNullPhoto,
        fullName: '',
        profession: ''
    })

    useEffect(() => {
        getData('user').then(res => {
            // console.log('data user: ', res)
            const data = res
            data.photo = {uri: res.photo}
            setprofile(res)
        })
    })

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={profile.photo} style={styles.avatar} />
            <View >
                <Text style={styles.name}>{profile.fullName}</Text>
                <Text style={styles.profession}>{profile.profession}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2,
        marginRight: 12
    },
    name: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        color: colors.text.primary,
        textTransform: 'capitalize'
    },
    profession: {
        fontSize: 12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        textTransform: 'capitalize'
    }
})
