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
import {validateAll} from 'indicative/validator';
export default class Login extends Component {
  state = {
    Email: '',
    Password: '',
    error: {},
  };
  loginUser = async data => {
    const rules = {
      Email: 'required|email',
      Password: 'required|string',
    };
    const message = {
      required: field => `${field} is required`,
      email: 'The email syntax is wrong',
    };
    try {
      await validateAll(data, rules, message);
    } catch (errors) {
      console.log('--------', this.state, errors);
      const formatedErrors = {};
      errors.forEach(error => (formatedErrors[error.field] = error.message));
      this.setState({
        error: formatedErrors,
      });
    }
  };
  render() {
    //console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.child}>
            <Header setText="LOGIN " />
            <View style={styles.child1}>
              <Input
                placeholder="Email"
                value={this.state.Email}
                onChangeText={Email => this.setState({Email})}
              />
              {//neu ve trai co thi thuc hien ve phai true & true
              this.state.error['Email'] && (
                <Text style={{color: 'red', alignSelf: 'flex-start'}}>
                  * {this.state.error['Email']}
                </Text>
              )}
              <Input
                onChangeText={Password => this.setState({Password})}
                placeholder="Password"
                textContentType="password"
                value={this.state.Password}
              />
              {//neu ve trai co thi thuc hien ve phai true & true
              this.state.error['Password'] && (
                <Text style={{color: 'red', alignSelf: 'flex-start'}}>
                  * {this.state.error['Password']}
                </Text>
              )}
              <View style={styles.child1}>
                <Button
                  setText="Sign in"
                  onPress={() => this.loginUser(this.state)}
                />
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

// var firebaseConfig = {
//   apiKey: "AIzaSyAmiWIlknJsCkSpQVV-Slz-952v4i_sqaY",
//   authDomain: "react-native-petshop.firebaseapp.com",
//   databaseURL: "https://react-native-petshop.firebaseio.com",
//   projectId: "react-native-petshop",
//   storageBucket: "react-native-petshop.appspot.com",
//   messagingSenderId: "354808018058",
//   appId: "1:354808018058:web:2e311d9879a1bc82906973",
//   measurementId: "G-KHDV065P45"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
