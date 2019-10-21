import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Header from '../components/Form/Header';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
export default class ForgetPass extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child}>
          <Header setText="FORGOT  PASSWORD" />
          <Text
            style={{
              top: 50,
              fontFamily: 'LobsterTwo-Regular',
              fontSize: 20,
              paddingHorizontal: 20,
            }}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>
          <View style={{top: 20}}>
            <Input placeholder="Email" />
            <Button setText="Send" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
  child: {
    alignItems: 'center',
    top: 30,
  },
});
