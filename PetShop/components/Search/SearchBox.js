import React, {Component} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchBox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{paddingLeft: 15}} />
        <Icon
          name="search"
          size={30}
          style={{alignSelf: 'center', paddingRight: 15}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    width: 363,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});
