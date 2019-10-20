import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Home from '../screens/Home';
//import Login from '../screens/Login';
import Cart from '../screens/Cart';
import Search from '../screens/Search';
import stackNav from './StackNav';
//create Tab Nav
const FirstNavGroup = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
    },
    Search: {
      screen: Search,
    },
    Cart: {
      screen: Cart,
    },
    Login: {
      screen: stackNav,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(FirstNavGroup);
