import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Category from '../components/Category';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Category />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
