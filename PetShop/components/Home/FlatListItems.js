import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class FlatListItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Image source={this.props.item.item.source}></Image>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 85,
    height: 85,
    borderRadius: 45,
    marginBottom: 15,
    marginLeft: 20,
    marginRight: 20,
  },
});
