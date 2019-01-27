import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
// import firebase from 'firebase';
import AppContainer from './config/routes';
import colors from './config/colors';

EStyleSheet.build(colors);

export default class App extends Component {
  componentWillMount() {
    // Insert Firebase here
  }

  render() {
    return <AppContainer />;
  }
}
