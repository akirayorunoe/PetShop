import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Home/Header';
export default class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header setText="YOUR CART" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
