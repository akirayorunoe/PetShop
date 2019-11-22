import React, {Component} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import PetItem from '../components/Home/PetItem';
const DATA = [
  {
    id: '1',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info:
      'is a dog \n bark \n a \n lotttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt' +
      '\n' +
      '\n' +
      'dfdsfsdfsdfsdfhudhfuihuahfuihasuihfuahfhuahsufhiashfuahfhaushfuashfhsafashfiashfiohsifhiohfoiahsdjosjdsajdsojdopsjospajopdjopjasdojasdjsaodjopsajdpjoasjdojsadjopsajdojdpojsaodjopsajdosajdpsajdpojsaojdosajdosajdopjsadojspjdopsjdojaspodjasjnoinwininafianfoinwoinfwafinion',
    price: 'Free',
    type: 'Dog',
  },
  {
    id: '2',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Cat',
  },
  {
    id: '3',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Bird',
  },
  {
    id: '4',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Hamster',
  },
  {
    id: '5',
    source: require('../assets/imgs/tenor.gif'),
    name: 'Khang',
    info: 'is a dog',
    price: 'Free',
    type: 'Fish',
  },
];
export default class Popular extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={item => {
            return (
              <PetItem
                navigation={this.props.screenProps}
                source={item.item.source}
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
