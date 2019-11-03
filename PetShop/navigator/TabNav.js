import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cart from '../screens/Cart';
import Search from '../screens/Search';
import stackNav from './StackNav';
import React from 'react';
//create Tab Nav
const FirstNavGroup = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <Icon name="home" size={30} color={focused ? 'black' : 'white'} />
          );
        },
      }),
    },
    Search: {
      screen: Search,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <Icon name="search" size={30} color={focused ? 'black' : 'white'} />
          );
        },
      }),
    },
    Cart: {
      screen: Cart,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <Icon
              name="shopping-cart"
              size={30}
              color={focused ? 'black' : 'white'}
            />
          );
        },
      }),
    },
    Login: {
      screen: stackNav,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: ({focused, tintColor}) => {
          return (
            <Icon name="user" size={30} color={focused ? 'black' : 'white'} />
          );
        },
      }),
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      style: {
        backgroundColor: '#E9AB9F',
      },
      showLabel: false,
    },
  },
);

export default createAppContainer(FirstNavGroup);
