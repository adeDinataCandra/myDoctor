/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

LogBox.ignoreLogs(['warning: ...']);
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
