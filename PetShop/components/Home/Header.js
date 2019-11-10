import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.setText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    // Dùng để font chữ không bị cắt
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Lobster-Regular',
    color: '#420000',
    fontSize: 45,
  },
});
