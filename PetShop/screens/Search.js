import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SearchBox from '../components/Search/SearchBox';
export default class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 30}}>
          <SearchBox />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA', alignItems: 'center'},
});
