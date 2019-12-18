import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {getData} from '../data/petData';
import PetItem from '../components/Home/PetItem';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Search extends Component {
  componentDidMount() {
    this.props.getData();
  }
  state = {
    search: '',
    DATASearch: [],
  };

  updateSearch = search => {
    this.setState({search});
  };
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    if (this.props.isFetching) return;
    const newData = this.props.data.carts.filter(function(item) {
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
    const {carts, isFetching} = this.props.data;
    //console.log('a', this.props.data);
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
        {isFetching ? (
          <ActivityIndicator size="large" color="orange" />
        ) : (
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
                  discount={item.item.discount}
                  id={item.item.id}
                />
              );
            }}></FlatList>
        )}
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
    data: state.cartsData, //lang nghe tu cartsData(reducer fetchItem)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getData}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
