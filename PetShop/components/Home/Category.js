import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import flatListData from '../../data/flatListData';
import FlatListItems from './FlatListItems';

export default class Category extends Component {
  render() {
    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={flatListData}
          renderItem={item => {
            return <FlatListItems item={item}></FlatListItems>;
          }}></FlatList>
      </View>
    );
  }
}
