/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './App';
import MainTodo from './src/Pages/MainTodo'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainTodo);
