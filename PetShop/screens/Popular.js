import React, {Component} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import PetItem from '../components/Home/PetItem';
//import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getData} from '../data/petData';
class Popular extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    //console.log('data', typeof this.state.DATA);
    const {carts, isFetching} = this.props.data;

    //console.log('abc', this.props.data);
    if (isFetching) {
      return <ActivityIndicator size="large" color="orange" />;
    } else
      return (
        //console.log(typeof carts, carts), //
        <View style={styles.container}>
          <FlatList
            //du lieu read only nen phai slice() truoc de copy
            data={carts.sort((x, y) => y.count - x.count)}
            renderItem={item => {
              return (
                <PetItem
                  navigation={this.props.screenProps}
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
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});

function mapStateToProps(state) {
  //console.log('a', state.cartsData);
  return {
    data: state.cartsData, //lang nghe tu cartsData(reducer fetchItem)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getData}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popular);
