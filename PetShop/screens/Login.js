import React, {Component} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import Header from '../components/Form/Header';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.child}>
          <Header setText="Login" />
          <View style={styles.child1}>
            <Input placeholder="Email" />
            <Input placeholder="Password" textContentType="password" />
            <View style={styles.child1}>
              <Button setText="Sign in" />
              <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                <Text>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  child: {
    alignItems: 'center',
    top: 90,
  },
  child1: {
    top: 32,
  },
});
