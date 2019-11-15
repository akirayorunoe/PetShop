import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';

export default class Pet extends Component {
  checkType(type) {
    let source;
    switch (type) {
      case 'Cat':
        source = require('../assets/imgs/icons8-cat-100.png');
        break;
      case 'Dog':
        source = require('../assets/imgs/icons8-dog-100.png');
        break;
      case 'Bird':
        source = require('../assets/imgs/icons8-bird-100.png');
        break;
      case 'Hamster':
        source = require('../assets/imgs/icons8-hamster-100.png');
        break;
      case 'Hamster':
        source = require('../assets/imgs/icons8-hamster-100.png');
        break;
      case 'Rabbit':
        source = require('../assets/imgs/icons8-rabbit-100.png');
        break;
    }
    return source;
  }
  render() {
    //check key
    console.log(this.props.navigation);
    return (
      <View style={styles.container}>
        <Text>
          {JSON.stringify(this.props.navigation.getParam('name')).replace(
            /\"/g,
            '',
          )}
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[
            {img: JSON.stringify(this.props.navigation.getParam('img'))},
            {img: JSON.stringify(this.props.navigation.getParam('img'))},
            {img: JSON.stringify(this.props.navigation.getParam('img'))},
          ]}
          renderItem={item => {
            return <Image source={item.item.img} />;
          }}
        />
        <Image
          source={this.checkType(
            JSON.stringify(this.props.navigation.getParam('type')),
          )}
        />
        <Text>
          ${' '}
          {JSON.stringify(this.props.navigation.getParam('price')).replace(
            /\"/g,
            '',
          )}
        </Text>
        <Text>
          {JSON.stringify(this.props.navigation.getParam('info')).replace(
            /\"/g,
            '',
          )}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA', alignItems: 'center'},
});
