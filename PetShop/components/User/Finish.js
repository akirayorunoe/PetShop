import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
export default class Finish extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        {this.props.name === 'check' ? (
          <Icon name={this.props.name} size={75} color="green" />
        ) : (
          <Icon2 name={this.props.name} size={75} color="red" />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
