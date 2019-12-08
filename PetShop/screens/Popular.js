import React, {Component} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import PetItem from '../components/Home/PetItem';
import DATA from '../data/petData';
class Popular extends Component {
  AddToCart() {
    this.props.RemoveFromCart();
    console.log('added');
  }
  RemoveFromCart() {
    this.props.AddToCart();
    console.log('removed');
  }
  render() {
    //console.log('data', DATA);
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={item => {
            return (
              <PetItem
                navigation={this.props.screenProps}
                source={item.item.source}
                name={item.item.name}
                info={item.item.info}
                price={item.item.price}
              />
            );
          }}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});

export default Popular;
