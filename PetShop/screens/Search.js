import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {getData} from '../data/petData';
import PetItem from '../components/Home/PetItem';
export default class Search extends Component {
  componentDidMount() {
    getData().then(response => {
      //console.log('DATA nek', response);
      this.setState({loading: false, DATA: response});
    });
  }
  state = {
    search: '',
    loading: true,
    DATA: [],
    DATASearch: [],
  };

  updateSearch = search => {
    this.setState({search});
  };
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.DATA.filter(function(item) {
      //applying filter for the inserted text in search bar
      //tìm theo tên
      const itemDataName = item.name
        ? item.name.toUpperCase()
        : ''.toUpperCase();
      const textData = text.toUpperCase();
      //tìm theo info
      const itemDataInfo = item.info
        ? item.info.toUpperCase()
        : ''.toUpperCase();
      //Tìm trong string itemDataName có chuỗi text không
      return (
        itemDataName.indexOf(textData) > -1 ||
        itemDataInfo.indexOf(textData) > -1
      );
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      DATASearch: newData,
      search: text,
    });
  }
  render() {
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          round
          placeholder="Search your pet here"
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          containerStyle={{
            backgroundColor: 'transparent',
            borderBottomColor: 'transparent',
            borderTopColor: 'transparent',
          }}
          leftIconContainerStyle={{
            backgroundColor: 'transparent',
          }}
          rightIconContainerStyle={{
            backgroundColor: 'transparent',
          }}
          inputContainerStyle={{
            backgroundColor: 'white',
            //borderRadius: 20,
            marginTop: 10,
            marginHorizontal: 15,
          }}
        />

        <FlatList
          data={this.state.search != '' ? this.state.DATASearch : []}
          renderItem={item => {
            return (
              <PetItem
                navigation={this.props.navigation}
                source1={item.item.source1}
                source2={item.item.source2}
                source3={item.item.source3}
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
