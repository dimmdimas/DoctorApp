import React from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILlogo } from '../../assets'
import { Fire } from '../../config'
import { colors, fonts } from '../../utils'

const Splash = ({navigation}) => {
    useEffect(() => {
        const unsubcribe = Fire.auth().onAuthStateChanged(user => {
            setTimeout(() => {
                if (user) {
                    console.log('user: ', user)
                    navigation.replace('MainApp')
                } else {
                    navigation.replace('GetStarted')
                }
            }, 3000)
        })    
        return () => unsubcribe()
    }, [navigation])        
            
        
    return (
        <View style={styles.page}>
            <ILlogo/>
            <Text style={styles.title}>My Doctor</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: { 
        backgroundColor: colors.white,
        justifyContent: 'center', 
        flex: 1, 
        alignItems: 'center'
    },
    title: { 
        fontSize: 20, 
        fontFamily: fonts.primary[600], 
        color: colors.text.primary, 
        marginTop: 20 
    }
})
