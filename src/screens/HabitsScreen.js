import React, { Component } from 'react';
import { View } from 'react-native';
import { NavDrawerButton, HabitList } from '../Components';

export default class HabitsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Habits',
    headerLeft: <NavDrawerButton navigation={navigation} />
  });

  render() {
    return <View style={{ flex: 1 }}>{<HabitList />}</View>;
  }
}
