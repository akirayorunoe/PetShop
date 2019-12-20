import React, {Component} from 'react';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import Swipeout from 'react-native-swipeout';
class CartItem extends Component {
  constructor(props) {
    super(props);
  }
  getPrice(price, discort) {
    return price - (price * discort) / 100;
  }
  state = {
    value: this.props.value,
  };
  decrease() {
    if (this.state.value <= 1) {
      this.setState({value: 1});
      return;
    }
    this.setState({value: parseInt(this.state.value) - 1});
    const item = {
      id: this.props.id,
      value: this.state.value,
    };
    console.log(item.value);
    this.props.DispatchUpdateItemToCart(item);
  }
  increase() {
    this.setState({value: parseInt(this.state.value) + 1});
    const item = {
      id: this.props.id,
      value: this.state.value,
    };
    console.log(item.value);
    this.props.DispatchUpdateItemToCart(item);
  }
  delete() {
    const item = {
      source1: this.props.source1,
      source2: this.props.source2,
      source3: this.props.source3,
      name: this.props.name,
      info: this.props.info,
      price: this.props.price,
      id: this.props.id,
      //value: this.state.value,
    };
    this.props.DispatchRemoveItemFromCart(item);
    this.props.DispatchAddToCart(item.id);
  }
  render() {
    const swipeoutSetting = {
      autoClose: true,
      backgroundColor: 'transparent',
      buttonWidth: 100,
      // onOpen: (sectionID, rowId, direction) => {},
      // onClose: (sectionID, rowId, direction) => {},
      right: [
        {
          onPress: () => {
            this.delete();
          },
          text: 'Delete',
          type: 'delete',
          backgroundColor: 'tomato',
        },
      ],
    };
    return (
      <Swipeout {...swipeoutSetting}>
        <View style={styles.container}>
          <Image source={{uri: this.props.source1}} style={styles.img}></Image>
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
            {this.props.discount != null ? null : (
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
            )}
            {this.props.discount != null ? (
              <View style={styles.horizonText}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: '#420000',
                  }}>
                  $ {this.getPrice(this.props.price, this.props.discount)}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    fontFamily: 'Roboto-Regular',
                    fontWeight: 'bold',
                    fontSize: 15,
                    color: 'tomato',
                  }}>
                  {this.props.discount}% OFF
                </Text>
              </View>
            ) : null}
          </View>
          <View style={styles.cartModi}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => this.decrease()}>
              <Icon name="minus" size={30} color="black" />
            </TouchableOpacity>
            <View
              style={{
                backgroundColor: 'white',
                height: 42,
                alignSelf: 'center',
              }}>
              <TextInput
                onEndEditing={() => {
                  this.state.value === '' || this.state.value <= 0
                    ? this.setState({value: 1})
                    : this.state.value;
                }}
                value={this.state.value.toString()}
                onChangeText={value => {
                  this.setState({value});
                }}
                maxLength={2}
                keyboardType="numeric"
                textContentType="telephoneNumber"
              />
            </View>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => this.increase()}>
              <Icon name="plus" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </Swipeout>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 100,
    marginRight: 15,
  },
  textcontent: {
    marginTop: 5,
    flex: 2,
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'space-between',
    height: 90,
    marginHorizontal: 10,
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
    opacity: 0.8,
  },
  horizonText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {justifyContent: 'center'},
  cartModi: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
const mapDispatchToProps = dispatch => ({
  DispatchAddItemToCart: item => dispatch({type: 'ADD_ITEM_TO_CART', item}),
  DispatchUpdateItemToCart: item =>
    dispatch({type: 'UPDATE_ITEM_TO_CART', item}),
  DispatchAddToCart: id => dispatch({type: 'ADD_TO_CART', id}),
  DispatchRemoveItemFromCart: item =>
    dispatch({type: 'REMOVE_ITEM_FROM_CART', item}),
});
export default connect(null, mapDispatchToProps)(CartItem);
