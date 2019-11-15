import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Popular from '../screens/Popular';
import New from '../screens/New';
import Sales from '../screens/Sales';
import {createAppContainer} from 'react-navigation';
const materialTopTabNavigator = createMaterialTopTabNavigator(
  {
    Popular: {
      screen: Popular,
    },
    New: {screen: New},
    Sales: {screen: Sales},
  },
  {
    initialRouteName: 'Popular',
    //swipeEnabled: false,
    tabBarOptions: {
      tabStyle: {
        flexWrap: 'nowrap',
      },
      style: {
        marginTop: 10,
        backgroundColor: 'transparent', //xoa mau ca border
      },
      labelStyle: {
        fontFamily: 'Lobster-Regular',
        fontSize: 25,
        margin: 0,
        padding: 0,
        color: '#420000',
      },
      indicatorStyle: {
        backgroundColor: '#420000',
      },
      upperCaseLabel: false,
    },
  },
);

export default createAppContainer(materialTopTabNavigator);
