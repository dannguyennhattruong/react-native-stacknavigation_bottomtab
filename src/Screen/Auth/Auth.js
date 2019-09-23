import React from 'react';
import {createStackNavigator} from 'react-navigation';

import Welcome from '../../Screen/Welcome';
import Login from '../../Screen/Login';
import SignUp from '../../Screen/SignUp';
import Forgot from '../../Screen/Forgot';
import {theme} from '../../Constant';
const Auth = createStackNavigator(
  {
    Welcome,
    Login,
    SignUp,
    Forgot,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: 'transparent', // or 'white
        borderBottomColor: 'transparent',
        elevation: 0, // for android
      },
      //   headerBackImage: (
      //     <Image
      //       source={require('../asset/images/back.png')}
      //       style={{height: 50, width: 50}}
      //     />
      //   ),
      //   headerRight : (
      //     <Image
      //     source={require('../asset/images/back.png')}
      //     style={{height: 50, width: 50}}
      //   />
      //   ),
      headerBackTitle: null,
      headerLeftContainerStyle: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft: 0,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: theme.sizes.base,
      },
    },
  },
);

export default Auth;
