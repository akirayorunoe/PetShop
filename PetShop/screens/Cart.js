import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  Alert,
  ToastAndroid,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Header from '../components/Home/Header';
import Button from '../components/Form/Button';
import {connect} from 'react-redux';
import CartItem from '../components/Cart/CartItem';
import firebase from '../fb';
class Cart extends Component {
  state = {
    loading: false,
  };
  checkOut() {
    this.setState({loading: true});
    if (this.props.carts.length === 0) {
      Alert.alert(
        'No pet in your cart',
        'Try to add some cute pets to your cart <3',
      );
      return;
    } else if (
      firebase.auth().onAuthStateChanged(
        function(user) {
          if (user) {
            // User is signed in.
            let s = 0;
            for (let i of this.props.carts) {
              s += parseInt(i.value);
            }
            if (this.props.carts.length != 0) {
              let getBuy = 0;
              firebase
                .database()
                .ref('buying/' + user.uid)
                .on('value', snapshot => {
                  if (snapshot.val() != null) {
                    let buy = snapshot.val().buy;
                    if (buy != null) getBuy = buy;
                  }
                });
              //add item mua vai database***
              firebase
                .database()
                .ref('buying/' + user.uid)
                .update({buy: getBuy + s}) //obj thuần
                .then(data => {
                  for (let i of this.props.carts) {
                    const item = {
                      id: i.id,
                    };
                    this.props.DispatchRemoveItemFromCart(item);
                    this.props.DispatchAddToCart(item.id);
                    //update collection
                    firebase
                      .firestore()
                      .collection('pets')
                      .where('id', '==', i.id)
                      .get()
                      .then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                          let prevCount = doc.data().count;
                          // Build doc ref from doc.id
                          firebase
                            .firestore()
                            .collection('pets')
                            .doc(doc.id)
                            .update({count: prevCount + i.value});
                        });
                      })
                      .then(this.setState({loading: false}));

                    ToastAndroid.showWithGravity(
                      'Buy success!',
                      ToastAndroid.SHORT, //can be SHORT, LONG
                      ToastAndroid.CENTER, //can be TOP, BOTTON, CENTER
                    );
                  }
                })
                .catch(error => {
                  //error callback
                  console.log('error ', error);
                });
            }
          } else {
            this.props.navigation.navigate('Login');
          }
        }.bind(this),
      )
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={this.state.loading}
          //Text with the Spinner
          textContent={'Adding to your database...'}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
        <ScrollView style={{flex: 1}}>
          <Header setText="YOUR CART" />
          <FlatList
            //du lieu read only nen phai slice() truoc de copy
            data={this.props.carts}
            renderItem={item => {
              return (
                <CartItem
                  source1={item.item.source1}
                  source2={item.item.source2}
                  source3={item.item.source3}
                  name={item.item.name}
                  info={item.item.info}
                  price={item.item.price}
                  id={item.item.id}
                  value={item.item.value}
                />
              );
            }}></FlatList>
        </ScrollView>
        <View
          style={{
            alignSelf: 'center',
            paddingTop: 10,
            marginBottom: 10,
            backgroundColor: 'transparent',
          }}>
          <Button setText="Check out" onPress={() => this.checkOut()} />
        </View>
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
    carts: state.cartsReducer, //lang nghe tu cartsData(reducer fetchItem)
  };
}
const mapDispatchToProps = dispatch => ({
  DispatchAddToCart: id => dispatch({type: 'ADD_TO_CART', id}),
  DispatchRemoveItemFromCart: item =>
    dispatch({type: 'REMOVE_ITEM_FROM_CART', item}),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
