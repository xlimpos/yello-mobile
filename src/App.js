/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Provider} from 'react-redux';

import MainSwitchNavigatorPatient from './navigations/Patient/MainSwitchNavigator';
import MainSwitchNavigatorDoctor from './navigations/Doctor/MainSwitchNavigator';

import store from './stores/reduxStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainSwitchNavigatorDoctor /> 
      </Provider>
        
    );
  }
}
