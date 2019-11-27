import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from '../fb';
export default class User extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Email: {firebase.auth().currentUser.email}</Text>
        <TouchableOpacity onPress={() => firebase.auth().signOut()}>
          <Text>Sign out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
