import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Header from '../components/Home/Header';
import Category from '../components/Home/Category';
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
