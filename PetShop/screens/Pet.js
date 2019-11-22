import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-web-swiper';
import Icon from 'react-native-vector-icons/Fontisto';
export default class Pet extends Component {
  state = {
    icon: 'shopping-basket-add',
  };
  // checkType(type) {
  //   let source;
  //   switch (type) {
  //     case 'Cat':
  //       source = require('../assets/imgs/icons8-cat-100.png');
  //       break;
  //     case 'Dog':
  //       source = require('../assets/imgs/icons8-dog-100.png');
  //       break;
  //     case 'Bird':
  //       source = require('../assets/imgs/icons8-bird-100.png');
  //       break;
  //     case 'Fish':
  //       source = require('../assets/imgs/icons8-fish-100.png');
  //       break;
  //     case 'Hamster':
  //       source = require('../assets/imgs/icons8-hamster-100.png');
  //       break;
  //     case 'Rabbit':
  //       source = require('../assets/imgs/icons8-rabbit-100.png');
  //       break;
  //   }
  //   return source;
  // }
  render() {
    //param tu screen khac gui qua duoi dang json
    //check key
    console.log('---', JSON.stringify(this.props.navigation.getParam('img')), {
      uri: 'https://facebook.github.io/react-native/img/tiny_logo.png',
    });

    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.header}>
            {JSON.stringify(this.props.navigation.getParam('name')).replace(
              /\"/g,
              '',
            )}
          </Text>
          {/* <FlatList
          style={{height: 300}}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={[
            {img: JSON.stringify(this.props.navigation.getParam('img'))},
            {img: JSON.stringify(this.props.navigation.getParam('img'))},
            {img: JSON.stringify(this.props.navigation.getParam('img'))},
          ]}
          renderItem={item => {
            console.log(item.item.img);
            return <Image style={styles.image} source={item.item.img} />;
          }}
        /> */}
          <View style={{height: 300}}>
            <Swiper controlsProps={{prevTitle: '', nextTitle: ''}}>
              <View style={styles.image}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://facebook.github.io/react-native/img/tiny_logo.png',
                  }}
                />
              </View>
              <View style={styles.image}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://facebook.github.io/react-native/img/tiny_logo.png',
                  }}
                />
              </View>
              <View style={styles.image}>
                <Image
                  style={styles.image}
                  source={{
                    uri:
                      'https://facebook.github.io/react-native/img/tiny_logo.png',
                  }}
                />
              </View>
            </Swiper>
          </View>
          <TouchableOpacity
            style={{alignSelf: 'flex-end', top: -50, marginRight: 30}}>
            <View
              style={{
                height: 75,
                width: 75,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'powderblue',
                borderRadius: 50,
              }}>
              <Icon
                size={30}
                name={
                  JSON.stringify(
                    this.props.navigation.getParam('addToCart'),
                  ).replace(/\"/g, '') === 'shopping-basket-add'
                    ? 'shopping-basket-add'
                    : 'shopping-basket-remove'
                }
                color={
                  this.state.icon === 'shopping-basket-add' ? 'black' : 'red'
                }
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.price}>
            ${' '}
            {JSON.stringify(this.props.navigation.getParam('price')).replace(
              /\"/g,
              '',
            )}
          </Text>
          <Text style={styles.info}>
            {JSON.stringify(this.props.navigation.getParam('info')).replace(
              /\"/g,
              '',
            )}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
  header: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#420000',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 'auto',
  },
  price: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#420000',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: -30,
    marginLeft: 20,
  },
  info: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#420000',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginTop: 25,
  },
});
