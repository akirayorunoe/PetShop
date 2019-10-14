import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.setText);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.setText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  header: {
    // Dùng để font chữ không bị cắt
    textAlign: 'center',
    //
    fontFamily: 'Lobster-Regular',
    color: '#000000',
    fontSize: 40,
  },
});
