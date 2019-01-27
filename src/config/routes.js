import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import { Header } from '../Components';

import TodayScreen from '../screens/TodayScreen';
import HabitsScreen from '../screens/HabitsScreen';

const TodayStack = createStackNavigator(
  {
    TodayScreen: { screen: TodayScreen }
    // TodaysEditScreen: { screen: TodaysEditScreen },
  },
  {
    defaultNavigationOptions: Header,
    navigationOptions: {
      drawerLabel: 'Today',
      drawerIcon: () => <Icon name="today" size={24} style={{ color: 'white' }} />
    }
  }
);

const HabitsStack = createStackNavigator(
  {
    Habits: { screen: HabitsScreen }
  },
  {
    defaultNavigationOptions: Header,
    navigationOptions: {
      drawerLabel: 'Habits',
      drawerIcon: () => <Icon name="loop" size={24} style={{ color: 'white' }} />
    }
  }
);

const appNavigator = createDrawerNavigator(
  {
    Today: {
      path: '/',
      screen: TodayStack
    },
    Habits: {
      path: '/habits',
      screen: HabitsStack
    }
  },
  {
    initialRouteName: 'Today',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

const AppContainer = createAppContainer(appNavigator);

export default AppContainer;
