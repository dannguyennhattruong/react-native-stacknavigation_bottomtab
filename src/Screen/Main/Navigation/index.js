import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

import HomeScreen from '../Home/Home';
import MissionList from '../Home/MissionList';
import WalletScreen from '../Home/HomeWallet';
import Wallet from '../Wallet/Wallet';
import History from '../History/History';
import More from '../More/More';
import Profile from '../More/Profile';
import Rank from '../More/Rank';
import Reward from '../More/Reward';
import Evalution from '../More/Evalution';
import ListTripExist from '../More/ListTripExist';
import MissionMore from '../More/MissionMore';
import Support from '../More/Support';
import ThongKe from '../More/ThongKe';
import Auth from '../../Auth/Auth';
import Welcome from '../../Welcome';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    MissionList: MissionList,
    HomeWallet: WalletScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Home Tab',
    },
  },
);

const WalletStack = createStackNavigator(
  {
    Wallet: Wallet,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Wallet Tab',
    },
  },
);

const HistoryStack = createStackNavigator(
  {
    History: History,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Wallet Tab',
    },
  },
);

const MoreStack = createStackNavigator(
  {
    More: More,
    Profile: Profile,
    Rank: Rank,
    Support: Support,
    Evalution: Evalution,
    ListTripExist: ListTripExist,
    Reward: Reward,
    MissionMore: MissionMore,
    ThongKe: ThongKe,
    Logout: Welcome,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      headerStyle: {
        backgroundColor: '#0091EA',
      },
      headerTintColor: '#fff',
      title: 'Wallet Tab',
      headerMode: () => {
        const {routeName} = navigation.state;
        return routeName === 'Logout' ? 'none' : 'screen';
      },
    }),
  },
);

const MainApp = createBottomTabNavigator(
  {
    Home: HomeStack,
    Wallet: WalletStack,
    Histroy: HistoryStack,
    More: MoreStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarVisible: navigation.state.index < 1,
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('../../../assets/icons/home1.png')}
              style={{width: 20, height: 20}}
            />
          );
        } else if (routeName === 'Wallet') {
          return (
            <Image
              source={require('../../../assets/icons/wallet1.png')}
              style={{width: 20, height: 20}}
            />
          );
        } else if (routeName === 'More') {
          return (
            <Image
              source={require('../../../assets/icons/more2.png')}
              style={{width: 20, height: 20}}
            />
          );
        } else {
          return (
            <Image
              source={require('../../../assets/icons/history1.png')}
              style={{width: 20, height: 20}}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  },
);

export default createAppContainer(MainApp);
