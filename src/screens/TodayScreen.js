/* eslint-disable lines-between-class-members */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavButton, NavDrawerButton } from '../components';

export default class TodayScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Today',
    headerRight: <NavButton onPress={() => navigation.navigate('TodayEditScreen')} icon="edit" />,
    headerLeft: <NavDrawerButton navigation={navigation} />
  });
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Daily Screens</Text>
      </View>
    );
  }
}
