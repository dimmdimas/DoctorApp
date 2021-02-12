import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DummyDoctor3 } from '../../assets';
import { Header, List } from '../../components';
import { colors } from '../../utils';

const ChooseDoctor = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anda" onPress={() => navigation.goBack()} />
      <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor3} name="Alexander" desc="Wanita" />
      <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor3} name="Alexander" desc="Wanita" />
      <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor3} name="Alexander" desc="Wanita" />
      <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor3} name="Alexander" desc="Wanita" />
      <List onPress={() => navigation.navigate('Chatting')} type="next" profile={DummyDoctor3} name="Alexander" desc="Wanita" />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  }
});
