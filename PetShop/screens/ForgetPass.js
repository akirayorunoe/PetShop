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
          {/* <Header setText="FORGOT PASSWORD" /> */}
          <Text
            style={{
              top: 30,
              textAlign: 'center',
              fontFamily: 'Lobster-Regular',
              color: '#000000',
              fontSize: 40,
              textTransform: 'capitalize',
            }}
          >forget password</Text>
          <Text
            style={{
              top: 50,
              fontFamily: 'LobsterTwo-Regular',
              fontSize: 18,
              //paddingHorizontal: 20,
              paddingRight: 10,
              paddingLeft: 20
            }}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>
          <View style={{top: 70}}>
            <View>
              <Input placeholder="Email" />
            </View>
            <View style={{marginTop: 50}}>
              <Button setText="Send" />
            </View>
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
