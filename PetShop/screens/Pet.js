import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Fontisto';
export default class Pet extends Component {
  state = {
    icon: 'shopping-basket-add',
    entries: [
      {img: JSON.stringify(this.props.navigation.getParam('img'))},
      {img: JSON.stringify(this.props.navigation.getParam('img'))},
      {img: JSON.stringify(this.props.navigation.getParam('img'))},
    ],
  };
  get pagination() {
    const {entries, activeSlide = 0} = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{backgroundColor: '#F5F7FA'}}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: 'black',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }
  _renderItem({item, index}) {
    return <Image style={styles.image} source={item.img} />;
  }
  render() {
    //param tu screen khac gui qua duoi dang json
    //check key

    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Text style={styles.header}>
            {JSON.stringify(this.props.navigation.getParam('name')).replace(
              /\"/g,
              '',
            )}
          </Text>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={this.state.entries}
            renderItem={this._renderItem}
            sliderWidth={Dimensions.get('window').width - 10}
            itemWidth={Dimensions.get('window').width}
            onSnapToItem={index => this.setState({activeSlide: index})}
          />
          {this.pagination}
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
    height: 300,
  },
  price: {
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#420000',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: -100,
    marginLeft: 20,
  },
  info: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#420000',
    alignSelf: 'flex-start',
    marginHorizontal: 20,
    marginTop: 30,
  },
});
