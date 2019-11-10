import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

export default class Dog extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header setText="DOG" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
