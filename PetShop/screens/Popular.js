import React, {Component} from 'react';
import {StyleSheet, FlatList, View, ActivityIndicator} from 'react-native';
import PetItem from '../components/Home/PetItem';
//import Spinner from 'react-native-loading-spinner-overlay';
//import firebase from '../fb';
import {getData} from '../data/petData';
class Popular extends Component {
  AddToCart() {
    this.props.RemoveFromCart();
    console.log('added');
  }
  RemoveFromCart() {
    this.props.AddToCart();
    console.log('removed');
  }
  componentDidMount() {
    // let thiS = this;
    // let data = [];
    // firebase
    //   .firestore()
    //   .collection('pets')
    //   .get()
    //   .then(
    //     function(querySnapshot) {
    //       querySnapshot.forEach(function(doc) {
    //         data.push(doc.data());
    //       });
    //       this.setState({DATA: data, loading: false});
    //       console.log(this.state.DATA);
    //     }.bind(this),
    //   ); //
    getData().then(response => {
      //console.log('DATA nek1', response);
      this.setState({loading: false, DATA: response});
    });
  }
  state = {
    loading: true,
    DATA: [],
  };
  render() {
    //console.log('data', DATA);
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="orange" />;
    } else
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.DATA.sort((x, y) => x.count - y.count)}
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
