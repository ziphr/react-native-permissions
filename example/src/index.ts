import {AppRegistry} from 'react-native';
import {Main} from './Main';

const appName = 'RNPermissionsExample';
AppRegistry.registerComponent(appName, () => Main);

if (typeof document !== 'undefined') {
  const rootTag = document.getElementById('root');
  AppRegistry.runApplication(appName, {rootTag});
}
