import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import PetItem from '../components/Home/PetItem';
import {getData} from '../data/petData';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Sales extends Component {
  AddToCart() {
    this.props.RemoveFromCart();
    console.log('added');
  }
  RemoveFromCart() {
    this.props.AddToCart();
    console.log('removed');
  }
  componentDidMount() {
    this.props.getData();
  }
  render() {
    const {carts, isFetching} = this.props.data;
    //console.log('a', this.props.data);
    if (isFetching) {
      return <ActivityIndicator size="large" color="orange" />;
    } else
      return (
        <View style={styles.container}>
          <FlatList
            data={carts.filter(x => x.discount != null)}
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
  //console.log('a', state);
  return {
    data: state.cartsData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({getData}, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
