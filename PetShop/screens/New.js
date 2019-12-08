import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import PetItem from '../components/Home/PetItem';
import DATA from '../data/petData';
export default class New extends Component {
  render() {
    //console.log('--+--', this.props.screenProps);
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
