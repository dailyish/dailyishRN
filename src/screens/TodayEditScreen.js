import React, { Component } from 'react';
import { View } from 'react-native';
import HabitList from '../Components';

export default class DailyScreen extends Component {
  static navigationOptions = {
    title: 'Edit'
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HabitList />
      </View>
    );
  }
}
