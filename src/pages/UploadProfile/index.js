import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { ILNullPhoto } from '../../assets';
import { Gap, Header, Input, Profile, Tombol } from '../../components';
import { Fire } from '../../config';
import { colors, getData, showError, storeData } from '../../utils';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    photoForDB: ''
  })
  const [password, setPassword] = useState('')
  const [photo, setPhoto] = useState(ILNullPhoto)

  useEffect(() => {
    getData('user').then((res) => {
      const data = res
      data.photoForDB = res?.photo?.length > 1 ? res.photo : ILNullPhoto;
      const tempPhoto = res?.photo?.length > 1 ? { uri: res.photo } : ILNullPhoto;
      setPhoto(tempPhoto)
      setProfile(data)
    })
  }, [])

  const update = () => {
    if (password.length > 0) {
      if (password.length < 6) {
        showError('Password kurang dari 6 karakter')
      } else {
        updatePassword()
        updateProfileData()
      }
    } else {
      updateProfileData()
    }
  }

  const updatePassword = () => {
    Fire.auth().onAuthStateChanged(user => {
      if (user) {
        user.updatePassword(password).catch(err => {
          showError(err.message)
        })
      }
    })
  }

  const updateProfileData = () => {
    const data = profile
    data.photo = profile.photoForDB
    delete data.photoForDB

    Fire.database()
      .ref(`doctors/${profile.uid}/`)
      .update(data)
      .then(() => {
        storeData('user', data)
        .then(() => {
          navigation.replace('MainApp');
        })
        .catch(() => {
          showError("Terjadi kesalahan")
        })
      })
      .catch(err => {
        showError(err.message)
      })
  }

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    })
  }

  const getImage = () => {
    ImagePicker.launchImageLibrary(
      { quality: 0.5, maxWidth: 200, maxHeight: 200, includeBase64: true },
      (response) => {
        // Same code as in above section!
        if (response.didCancel || response.error) {
          showError('Ooops, Sepertinya anda tidak memilih fotonya?')
        } else {
          const source = { uri: response.uri }
          setProfile({
            ...profile,
            photoForDB: `data:${response.type};base64, ${response.data}`,
          })
          setPhoto(source)
        }
      },
    )
  }

  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack ()} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Profile isRemove photo={photo} onPress={getImage} />
        <Gap height={26} />
        <Input label="Full Name" value={profile.fullName} onChangeText={value => changeText('fullName', value)} />
        <Gap  height={24} />
        <Input label="Email" value={profile.email} onChangeText={value => changeText('email', value)} disable />
        <Gap  height={24} />
        <Input label="Password" value={password} onChangeText={(value) => setPassword(value)} secureTextEntry/>
        <Gap  height={40} />
        <Tombol title="Save Profile" onPress={update}/>
      </View>
      </ScrollView>
    </View>
  );
}

export default UpdateProfile;

const styles = StyleSheet.create ({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
      padding: 40,
      paddingTop: 0
  }
});
