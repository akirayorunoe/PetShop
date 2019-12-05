/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
console.disableYellowBox = true; //disable yellow warning box
AppRegistry.registerComponent(appName, () => App);
