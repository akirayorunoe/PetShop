import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import {validateAll} from 'indicative/validator';
export default class ForgetPass extends Component {
  state = {
    Email: '',
    error: {},
  };
  verifyUser = async data => {
    const rules = {
      Email: 'required|email',
    };
    const message = {
      required: field => `${field} is required`,
      email: 'The email syntax is wrong',
    };
    try {
      await validateAll(data, rules, message);
      // const response = await Axios.post(
      //   'https://react-blog-api.bahdcasts.com/api/auth/register',
      //   {
      //     name: data.name,
      //     email: data.email,
      //     password: data.password,
      //   },
      // );
      // this.setState = {
      //   userData: response,
      // };
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
            <Text
              style={{
                marginTop: 30,
                textAlign: 'center',
                fontFamily: 'Lobster-Regular',
                color: '#000000',
                fontSize: 40,
                textTransform: 'capitalize',
              }}>
              forget password
            </Text>
            <Text
              style={{
                marginTop: 50,
                fontFamily: 'LobsterTwo-Regular',
                fontSize: 18,
                paddingRight: 10,
                paddingLeft: 20,
              }}>
              Please, enter your email address. You will receive a link to
              create a new password via email.
            </Text>
            <View style={{marginTop: 70}}>
              <View>
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
              </View>
              <View style={{marginTop: 30}}>
                <Button
                  setText="Send"
                  onPress={() => this.verifyUser(this.state)}
                />
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
});
