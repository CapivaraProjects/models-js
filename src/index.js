import React, { Component } from 'react';
import Login from './scenes/Login';
import SignUp from './scenes/SignUp';
import PwRecovery from './scenes/PwRecovery';
import Main from './Main'
import {createStackNavigator, createAppContainer } from 'react-navigation';
import {TabNavigator} from 'react-navigation'
import {BottomNavigation, Toolbar, COLOR, ThemeProvider } from 'react-native-material-ui';
import { Navigator, NativeModules } from 'react-native';
import PropTypes from 'prop-types';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  render() {  
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createAppContainer (createStackNavigator({
  Login: { screen: Login, navigationOptions: { header: null}},
  SignUp: { screen: SignUp, navigationOptions: { header: null }},
  PwRecovery: {screen: PwRecovery, navigationOptions: { header: null }},
  Main: {screen: Main, navigationOptions: {header: null}}
},{
  initialRouteName: 'Login', 
}
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

