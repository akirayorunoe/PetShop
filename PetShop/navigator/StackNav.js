import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgetPass from '../screens/ForgetPass';

const stackNav = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null,
      }),
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
    ForgetPass: {
      screen: ForgetPass,
      navigationOptions: () => ({
        //the header will not have a background
        headerTransparent: true,
      }),
    },
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(stackNav);
