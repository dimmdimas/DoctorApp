import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap, Header, Profile, ProfileItem, Tombol } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({ navigation}) => {
    return (
        <View style={styles.page} >
            <Header onPress={() => navigation.goBack()} title="Doctor Profile"/>
            <Profile name="Nairobi Putri Hayza" desc="Doctor Anak"/>
            <Gap height={10} />
            <ProfileItem label="Alumnus" value="Universitas Indonesia, 2020" />
            <ProfileItem label="Tempat Praktik" value="Rumah Sakit Umum, Bandung" />
            <ProfileItem label="No. STR" value="0808102122" />
            <View style={styles.action}>
                <Tombol title="Start Consultation" onPress={() => navigation.navigate('Chatting')}/>
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    action: {
        paddingHorizontal: 40,
        paddingTop: 23
    }
})
