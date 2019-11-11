import React, {Component} from 'react';
import {FlatList, View} from 'react-native';
import flatListData from '../../data/flatListData';
import FlatListItems from './FlatListItems';

export default class Category extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.navigation);
    return (
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={flatListData}
          renderItem={item => {
            return (
              <FlatListItems
                item={item}
                onPress={() =>
                  this.props.navigation.navigate(`${item.item.key}`)
                }></FlatListItems>
            );
          }}></FlatList>
      </View>
    );
  }
}
