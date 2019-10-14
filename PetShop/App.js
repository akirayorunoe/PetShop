import React, {Component} from 'react';
import {View} from 'react-native';
import Login from './screens/Login';
import Header from './components/Form/Header';
import Input from './components/Form/Input';

class App extends Component {
  render() {
    return (
      // <View>
      //   <Header setText="Login" />
      //   <Input placeholder="Email" />
      // </View>
      <Login />
    );
  }
}

export default App;
