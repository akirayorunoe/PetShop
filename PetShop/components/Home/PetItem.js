import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
//dung icon font nao thi add font do
import Icon from 'react-native-vector-icons/Fontisto';

export default class PetItem extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: 'shopping-basket-add',
  };
  AddToCart() {
    console.log('add');
  }
  RemoveFromCart() {
    console.log('remove');
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.navigation.navigate('Pet', {
            //add param to Pet page
            img: this.props.source,
            name: this.props.name,
            info: this.props.info,
            price: this.props.price,
            addToCart: this.state.name,
          });
        }}>
        <Image source={this.props.source} style={styles.img}></Image>
        <View style={styles.textcontent}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontFamily: 'Roboto-Regular',
              fontWeight: 'bold',
              fontSize: 20,
              color: '#420000',
            }}>
            {this.props.name}
          </Text>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              fontFamily: 'Roboto-Regular',
              fontSize: 15,
              color: '#420000',
            }}>
            {this.props.info}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{
              fontFamily: 'Roboto-Regular',
              fontWeight: 'bold',
              fontSize: 15,
              color: '#420000',
            }}>
            $ {this.props.price}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            this.state.name === 'shopping-basket-add'
              ? (this.setState({name: 'shopping-basket-remove'}),
                this.AddToCart())
              : (this.setState({name: 'shopping-basket-add'}),
                this.RemoveFromCart())
          }
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignSelf: 'center',
          }}>
          <Icon
            name={this.state.name}
            size={30}
            color={this.state.name === 'shopping-basket-add' ? 'black' : 'red'}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    alignSelf: 'stretch',
  },
  textcontent: {
    marginTop: 5,
    flex: 2,
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'space-between',
    height: 90,
  },
  img: {
    flex: 1,
    marginLeft: 30,
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 10,
  },
});
