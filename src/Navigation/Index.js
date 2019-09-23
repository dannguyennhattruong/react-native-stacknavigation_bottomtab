import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import MainApp from '../Screen/Main/Navigation/index';
import AsyncStorage from '@react-native-community/async-storage';
import Auth from '../Screen/Auth/Auth';

AsyncStorage.removeItem('driver');
 AsyncStorage.removeItem('access-Token');
const checkUserSignedIn = async () => {
  try {
    let value = await AsyncStorage.getItem('driver');
    if (value != null) {
      console.warn('true ' + value);
    } else {
      console.warn('null');
    }
  } catch (error) {
    // Error retrieving data
    console.warn(error);
  }
};

const AppNavigator = createSwitchNavigator(
  {
    Auth: {screen: Auth},
    Main: {screen: MainApp},
  },
  {
    initialRouteName: checkUserSignedIn ? 'Auth' : 'Main',
  },
);

export default createAppContainer(AppNavigator);
