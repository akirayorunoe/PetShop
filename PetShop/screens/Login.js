import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../components/Form/Header';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
export default class Login extends Component {
  render() {
    //console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.child}>
            <Header setText="LOGIN " />
            <View style={styles.child1}>
              <Input placeholder="Email" />
              <Input placeholder="Password" textContentType="password" />
              <View style={styles.child1}>
                <Button setText="Sign in" />
                <TouchableOpacity
                  style={{marginTop: 10, alignItems: 'flex-end'}}
                  onPress={() => this.props.navigation.navigate('ForgetPass')}>
                  <Text
                    style={{
                      fontFamily: 'LobsterTwo-Regular',
                      textDecorationLine: 'underline',
                    }}>
                    Forgot your password?
                  </Text>
                </TouchableOpacity>
                <View style={{marginTop: 80}}>
                  <Button
                    setText="Sign up"
                    onPress={() => this.props.navigation.navigate('SignUp')}
                  />
                  <Text
                    style={{
                      marginTop: 40,
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
          </View>
        </ScrollView>
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
    marginTop: 30,
  },
  child1: {
    marginTop: 30,
  },
});
