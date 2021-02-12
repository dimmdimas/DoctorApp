import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { useDispatch } from 'react-redux';
import { ILlogo } from '../../assets';
import { Gap, Input, Link, Tombol } from '../../components';
import { Fire } from '../../config';
import { colors, fonts, showError, storeData, useForm } from '../../utils';

const Login = ({navigation}) => {
  const [form, setFrom] = useForm ({email: '', password: ''});
  const dispatch = useDispatch()

  const login = () => {
    console.log ('form: ', form);
    dispatch({type: 'SET_LOADING', value: true})
    Fire.auth()
    .signInWithEmailAndPassword(form.email, form.password)
    .then(res => {
        console.log('success: ', res)
        dispatch({type: 'SET_LOADING', value: false})
        Fire.database()
        .ref(`users/${res.user.uid}/`)
        .once('value')
        .then(resDB => {
            console.log('data user: ', resDB.val())
            if(resDB.val()){
                storeData('user', resDB.val())
                navigation.replace('MainApp')
            }
        })
    })
    .catch(err => {
        console.log('error: ', err)
        showError(err.message)
        dispatch({type: 'SET_LOADING', value: false})
    })
  };
  return (
    <>
    <View style={styles.page}>
    <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
      <ILlogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input
        label="Email Address"
        value={form.email}
        onChangeText={value => setFrom ('email', value)}
      />
      <Gap height={24} />
      <Input
        label="Password"
        value={form.password}
        onChangeText={value => setFrom ('password', value)}
        secureTextEntry
      />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={40} />
      <Tombol title="Sign In" onPress={login} />
      <Gap height={30} />
      <Link
        title="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate ('Register')}
      />
    </ScrollView>
    </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create ({
  page: {
    paddingHorizontal: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
