import React, {Component} from 'react';
import Header from '../components/Home/Header';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import PetItem from '../components/Home/PetItem';
import {getData} from '../data/petData';

export default class Dog extends Component {
  state = {
    loading: true,
    DATA: [],
  };
  componentDidMount() {
    getData().then(response => {
      //console.log('DATA nek1', response);
      this.setState({loading: false, DATA: response});
    });
  }

  render() {
    //console.log('data', DATA);
    
      return (
        <View style={styles.container}>
          <Header setText="DOG" />
        {  (this.state.loading) ?
      <ActivityIndicator size="large" color="orange" />
          :
          <FlatList
            data={this.state.DATA.filter(x => x.type === 'Dog')}
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
          }
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#F5F7FA'},
});
