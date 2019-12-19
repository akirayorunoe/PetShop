import React, {Component} from 'react';
import Header from '../components/Home/Header';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import PetItem from '../components/Home/PetItem';
import {getData} from '../data/petData';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Cat extends Component {
  componentDidMount() {
    //this.props.getData();
  }
  render() {
    const {carts, isFetching} = this.props.data;
    //console.log('abc', this.props.data);
    return (
      <View style={styles.container}>
        <Header setText="CAT" />
        {isFetching ? (
          <ActivityIndicator size="large" color="orange" />
        ) : (
          <FlatList
            //du lieu read only nen phai slice() truoc de copy
            data={carts.filter(x => x.type === 'Cat')}
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
                  icon={item.item.icon ? item.item.icon : 'shopping-basket-add'} //
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

export default connect(mapStateToProps, mapDispatchToProps)(Cat);
