import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import Header from '../components/Form/Header';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import User from './User';
import {validateAll} from 'indicative/validator';
import firebase from '../fb';
//import {GoogleSignin} from 'react-native-google-signin';

export default class Login extends Component {
  state = {
    Email: '',
    Password: '',
    error: {},
    loggedIn: null,
    logInFail: '',
    loading: false,
  };
  componentDidMount() {
    // //initial configuration
    // GoogleSignin.configure({
    //   //It is mandatory to call this method before attempting to call signIn()
    //   scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    //   // Repleace with your webClientId generated from Firebase console
    //   webClientId: 'REPLACE_YOUR_WEB_CLIENT_ID_HERE',
    // });
    // //Check if user is already signed in
    // this._isSignedIn();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true,
        });
      } else {
        this.setState({
          loggedIn: false,
        });
      }
    });
  }
  googlelogin = () => {
    // async function bootstrap() {
    //   await GoogleSignin.configure({
    //     scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    //     webClientId: '', // required
    //   });
    // }
    // const { accessToken, idToken } = await GoogleSignin.signIn();
    // const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    // await firebase.auth().signInWithCredential(credential);
  };
  loginUser = async data => {
    this.setState({logInFail: ''});
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
      this.setState({loading: true, error: {}});
      firebase
        .auth()
        .signInWithEmailAndPassword(this.state.Email, this.state.Password)
        .then(this.onLoginSuccess)
        .catch(err => {
          this.setState({
            logInFail: err.message,
            loading: false,
          });
        });
    } catch (errors) {
      const formatedErrors = {};
      errors.forEach(error => (formatedErrors[error.field] = error.message));
      this.setState({
        error: formatedErrors,
      });
    }
  };
  onLoginSuccess = () => {
    this.setState({
      Email: '',
      Password: '',
      error: {},
      logInFail: '',
      loading: false,
    });
  };
  render() {
    //console.log(this.props.navigation);
    switch (this.state.loggedIn) {
      default:
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
                    {this.state.loading && <ActivityIndicator />}
                    {//neu ve trai co thi thuc hien ve phai true & true
                    this.state.logInFail !== '' && (
                      <Text
                        style={{
                          color: 'red',
                          alignSelf: 'flex-start',
                          width: 308,
                        }}>
                        * {this.state.logInFail}
                      </Text>
                    )}
                    <TouchableOpacity
                      style={{marginTop: 10, alignItems: 'flex-end'}}
                      onPress={() =>
                        this.props.navigation.navigate('ForgetPass')
                      }>
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
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        );
      case true: {
        return <User />;
      }
    }
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
