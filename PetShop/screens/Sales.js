import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Sales extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Sales</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
