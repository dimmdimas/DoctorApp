import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation}) => {
  return (
      <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Nairobi"
        onPress={() => navigation.goBack ()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Febuari 2021</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe/>
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create ({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
  content: {
    flex: 1
  }
});
