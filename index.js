/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// 개발 환경 시작
// 0. 최초 1회, 빌드 (react-native run-android)
// 1. 기계를 준비 (에뮬레이터/ 실제기기)
// 2. 서버를 켜기 (react-native start)
