import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import PetItem from '../components/Home/PetItem';
import {getData} from '../data/petData';
export default class Sales extends Component {
  componentDidMount() {
    getData().then(response => {
      //console.log('DATA nek', response);
      this.setState({loading: false, DATA: response});
    });
  }
  state = {
    loading: true,
    DATA: [],
  };
  render() {
    //console.log(this.state.DATA);
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="orange" />;
    } else
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.DATA.filter(x => x.discount != null)}
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
