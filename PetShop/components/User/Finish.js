import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
export default class Finish extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.props.name === 'check' ? (
          <Icon name={this.props.name} size={100} color="green" />
        ) : (
          <Icon name={this.props.name} size={100} color="red" />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
