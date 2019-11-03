import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import Header from '../components/Home/Header';
import Category from '../components/Home/Category';
import MaterialTopTabNav from '../navigator/MaterialTopTab';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <Header />
          <Category />
          <MaterialTopTabNav />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
