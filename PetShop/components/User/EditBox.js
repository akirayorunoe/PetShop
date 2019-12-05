import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class EditBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>{this.props.header}</Text>
        <View style={styles.textcontent}>{this.props.value}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    height: 53,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    marginVertical: 15,
    justifyContent: 'space-evenly',
  },
  textHeader: {
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textcontent: {
    marginLeft: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
  },
});
