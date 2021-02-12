import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { bg, ILlogo } from '../../assets'
import { Gap, Tombol } from '../../components'
import { colors, fonts } from '../../utils'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={bg} style={styles.page}>
            <View>
                <ILlogo />
                <Text style={styles.title}>Konsultasi dengan dokter jadi lebih mudah & fleksibel</Text>
            </View>
            <View style={styles.container}>
                <Tombol title="Get Started"
                    onPress={() => navigation.navigate('Register')}
                />
                <Gap height={16} />
                <Tombol type="secondary" title="Sign In" 
                    onPress={() => navigation.navigate('Login')}
                />
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {
        padding: 40,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        flex: 1
    },
    title: { 
        fontSize: 28,
        color: colors.white,
        marginTop: 91,
        fontFamily: fonts.primary[600]
    }
})
