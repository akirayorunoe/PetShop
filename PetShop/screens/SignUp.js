import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import Header from '../components/Form/Header';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import {validateAll} from 'indicative/validator';
import firebase from '../fb';
//contentContainerStyle={{flexGrow: 1}} dùng để ngăn scroll view làm cắt màn hình
export default class SignUp extends Component {
  state = {
    Name: '',
    Email: '',
    Password: '',
    //phai la _confirmation de validator hieu
    Password_confirmation: '',
    UserData: '',
    error: {},
    errSignUp: '',
    loading: false,
  };
  registerUser = async data => {
    this.setState({errSignUp: ''});
    const rules = {
      Name: 'required|string',
      Email: 'required|email',
      Password: 'required|string|min:6|confirmed',
    };
    const message = {
      required: field => `${field} is required`,
      email: 'The email syntax is wrong',
      min: 'Password is too short',
      confirmed: 'The password did not match',
    };
    try {
      await validateAll(data, rules, message);
      this.setState({loading: true, error: {}});
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.Email, this.state.Password)
        .then(() => {
          var userf = firebase.auth().currentUser;
          userf.updateProfile({displayName: this.state.Name});
        })
        .then(() =>
          ToastAndroid.showWithGravity(
            'Sign up success!',
            ToastAndroid.SHORT, //can be SHORT, LONG
            ToastAndroid.TOP, //can be TOP, BOTTON, CENTER
          ),
        )
        .then(() => this.props.navigation.navigate('Login'))
        .catch(error => {
          this.setState({
            errSignUp: error.message,
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
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.child}>
            <Header setText="SIGN UP" />
            <View style={styles.child}>
              <Input
                placeholder="Name"
                value={this.state.Name}
                onChangeText={Name => this.setState({Name})}
              />
              {//neu ve trai co thi thuc hien ve phai true & true
              this.state.error['Name'] && (
                <Text style={{color: 'red', alignSelf: 'flex-start'}}>
                  * {this.state.error['Name']}
                </Text>
              )}
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
              <Input
                onChangeText={Password_confirmation =>
                  this.setState({Password_confirmation})
                }
                value={this.state.Password_confirmation}
                placeholder="Re-enter Password"
                textContentType="password"
              />
              <View style={styles.child1}>
                <Button
                  setText="Sign Up"
                  onPress={() => this.registerUser(this.state)}
                />
                {this.state.loading && <ActivityIndicator />}
                {//neu ve trai co thi thuc hien ve phai true & true
                this.state.errSignUp !== '' && (
                  <Text
                    style={{
                      color: 'red',
                      alignSelf: 'flex-start',
                      width: 308,
                    }}>
                    * {this.state.errSignUp}
                  </Text>
                )}
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
