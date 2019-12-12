import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
//dung icon font nao thi add font do
import Icon from 'react-native-vector-icons/Fontisto';
import {connect} from 'react-redux';
class PetItem extends Component {
  constructor(props) {
    super(props);
  }
  AddToCart() {
    this.props.RemoveFromCart();
    console.log('added');
  }
  RemoveFromCart() {
    this.props.AddToCart();
    console.log('removed');
  }
  getPrice(price, discort) {
    return price - (price * discort) / 100;
  }
  render() {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          this.props.navigation.navigate('Pet', {
            //add param to Pet page
            img1: this.props.source1,
            img2: this.props.source2,
            img3: this.props.source3,
            name: this.props.name,
            info: this.props.info,
            price:
              this.props.discount != null
                ? this.getPrice(this.props.price, this.props.discount)
                : this.props.price,
          });
        }}>
        <Image source={{uri: this.props.source1}} style={styles.img}></Image>
        {/* */}
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
          {this.props.discount != null
            ? (console.log(this.props.discount),
              (
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
              ))
            : null}
        </View>
        <TouchableOpacity
          onPress={() =>
            this.props.cartsModify === 'shopping-basket-add'
              ? this.AddToCart()
              : this.RemoveFromCart()
          }
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignSelf: 'center',
          }}>
          <Icon
            name={this.props.cartsModify}
            size={30}
            color={
              this.props.cartsModify === 'shopping-basket-add' ? 'black' : 'red'
            }
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
});

const mapStateToProps = state => {
  return {
    cartsModify: state.cartsModify.icon,
  };
};
const mapDispatchToProps = dispatch => ({
  AddToCart: () => dispatch({type: 'ADD_TO_CART'}),
  RemoveFromCart: () => dispatch({type: 'REMOVE_FROM_CART'}),
});
export default connect(mapStateToProps, mapDispatchToProps)(PetItem);
