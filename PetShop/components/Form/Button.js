import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.child}>{this.props.setText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 308,
    height: 41,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#E4947B',
    alignItems: 'center',
  },
  child: {fontFamily: 'LobsterTwo-Regular', fontSize: 25},
});
