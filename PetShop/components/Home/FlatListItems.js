import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
export default class FlatListItems extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //   console.log(
    //     this.props.item.item.source,
    //     this.props,
    //     typeof this.props.item.item.source,
    //   );
    return (
      <TouchableOpacity style={styles.container}>
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
