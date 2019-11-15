import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Cat from '../screens/Cat';
import Dog from '../screens/Dog';
import Bird from '../screens/Bird';
import Hamster from '../screens/Hamster';
import Fish from '../screens/Fish';
import Rabbit from '../screens/Rabbit';
import Home from '../screens/Home';
import Pet from '../screens/Pet';
const stackNavPet = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
    Cat: {
      screen: Cat,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
    Dog: {
      screen: Dog,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
    Fish: {
      screen: Fish,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
    Bird: {
      screen: Bird,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
    Hamster: {
      screen: Hamster,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
    Rabbit: {
      screen: Rabbit,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
    Pet: {
      screen: Pet,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(stackNavPet);
