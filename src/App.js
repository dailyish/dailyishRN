import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import firebase from 'firebase';
import reducers from './Reducers';
import AppContainer from './config/routes';
import colors from './config/colors';

EStyleSheet.build(colors);

export default class App extends Component {
  componentWillMount() {
    // Insert Firebase here
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <AppContainer />
      </Provider>
    );
  }
}
