import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
export default class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          textContentType={this.props.textContentType}
          secureTextEntry={
            this.props.textContentType === 'password' ? true : false
          }
          style={styles.child}
          placeholder={this.props.placeholder}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 308,
    height: 50,
    marginVertical: 8,
  },
  child: {fontFamily: 'Roboto'},
});
