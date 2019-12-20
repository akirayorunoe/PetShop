import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import Header from '../components/Home/Header';
import Button from '../components/Form/Button';
import {connect} from 'react-redux';
import CartItem from '../components/Cart/CartItem';
class Cart extends Component {
  checkOut() {}
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{flex: 1}}>
          <Header setText="YOUR CART" />
          <FlatList
            //du lieu read only nen phai slice() truoc de copy
            data={this.props.carts}
            renderItem={item => {
              return (
                <CartItem
                  source1={item.item.source1}
                  source2={item.item.source2}
                  source3={item.item.source3}
                  name={item.item.name}
                  info={item.item.info}
                  price={item.item.price}
                  id={item.item.id}
                  value={item.item.value}
                />
              );
            }}></FlatList>
        </ScrollView>
        <View
          style={{
            alignSelf: 'center',
            paddingTop: 10,
            marginBottom: 10,
            backgroundColor: 'transparent',
          }}>
          <Button setText="Check out" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});

function mapStateToProps(state) {
  //console.log('a', state);
  return {
    carts: state.cartsReducer, //lang nghe tu cartsData(reducer fetchItem)
  };
}
export default connect(mapStateToProps)(Cart);
