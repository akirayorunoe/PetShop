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
  };

  updateSearch = search => {
    this.setState({search});
  };
  render() {
    const {search} = this.state;
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search your pet here"
          onChangeText={this.updateSearch}
          value={search}
          lightTheme={true}
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
            borderRadius: 20,
            marginTop: 10,
            marginHorizontal: 15,
          }}
        />

        <FlatList
          data={this.state.DATA}
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
