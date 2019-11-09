import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import Header from '../components/Form/Header';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
//contentContainerStyle={{flexGrow: 1}} dùng để ngăn scroll view làm cắt màn hình
export default class SignUp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.child}>
            <Header setText="SIGN UP" />
            <View style={styles.child}>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Password" textContentType="password" />
              <Input
                placeholder="Re-enter Password"
                textContentType="password"
              />
              <View style={styles.child1}>
                <Button setText="Sign Up" />
                <Text
                  style={{
                    marginTop: 50,
                    textAlign: 'center',
                    fontFamily: 'LobsterTwo-Regular',
                  }}>
                  Or with other social account
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 35,
                  }}>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/imgs/Facebook.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={require('../assets/imgs/Google.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
  child: {
    alignItems: 'center',
    marginTop: 30,
  },
  child1: {
    marginTop: 30,
  },
});
