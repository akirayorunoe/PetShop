import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../components/Home/Header';
import Button from '../components/Form/Button';
export default class Cart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Header setText="YOUR CART" />
        </ScrollView>
        <View
          style={{
            alignSelf: 'center',
            position: 'absolute',
            bottom: 30,
          }}>
          <Button setText="Check out" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
