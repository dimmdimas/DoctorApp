import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { ILNullPhoto } from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import {colors, getData} from '../../utils';
import {Fire} from '../../config'
import { showMessage } from 'react-native-flash-message';

const UserProfile = ({navigation}) => {
  const [profile, setprofile] = useState({
    fullName: '',
    profession: '',
    photo: ILNullPhoto
  })
  
  useEffect(() => {
    getData('user').then(res => {
      const data = res
      data.photo = {uri: res.photo}
      setprofile(data)
    })
  }, [])

  const signOut = () => {
    Fire.auth().signOut()
      .then(() => {
        console.log('success sign out')
        navigation.replace('GetStarted')

      }).catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: colors.error,
          color: colors.white
        })
      })
  }

  return (
    <View style={styles.page}>
      <Header  
          title="Profile"
          onPress={() => navigation.goBack ()}
      />
      <Gap height={10} />
      {profile.fullName.length > 0 && <Profile name={profile.fullName} desc={profile.profession} photo={profile.photo} />}
      <Gap height={40} />
      <List
        name="Edit Profile"
        desc="Last Update Yesterday"
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate('UpdateProfile')}
      />
      <List
        name="Languange"
        desc="Last Update Yesterday"
        type="next"
        icon="language"
      />
      <List
        name="Give Us Rate"
        desc="Last Update Yesterday"
        type="next"
        icon="rate"
      />
      <List
        name="Sign Out"
        desc="Last Update Yesterday"
        type="next"
        icon="help"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create ({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
