import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  StyleSheet,
  ImageBackground,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

// import {AsyncStorageStatic} from '@react-native-community/async-storage';

import {Button, Block, Input, Text} from '../Components/index';
import {theme} from '../Constant';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: [],
      loading: false,
    };
  }
  static navigationOptions = {
    header: null,
  };

  // _loadInitialState = async () => {
  // var value = await AsyncStorage.getItem('user');

  // if (value !== null) {
  //   this.props.navigation.navigate('Main');
  //   console.warn(value);
  // }
  // };


  handleLogin = async () => {
    if (this.state.email && this.state.password) {
      // Alert.alert(
      //   'email : ' + this.state.email + 'passs: ' + this.state.password,
      // );

      await fetch('http://172.30.231.225:3000/api/drivers/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then(respone => respone.json())
        .then(res => {
          if (res.hasOwnProperty('driver')) {
           AsyncStorage.setItem('driver', JSON.stringify(res.driver));
            AsyncStorage.setItem('access-Token', res.driver.tokens[0].token);
            // AsyncStorage.removeItem('driver', errr => console.warn(errr));
            // AsyncStorage.removeItem('access-Token', errr => console.warn(errr));
            // console.warn(res);
            this.props.navigation.navigate('Main');
            console.warn(res.driver.tokens[0].token);
          } else {
            Alert.alert('not found user');
          }
        })
        .done();
    } else {
      Alert.alert('Please fill full inputs..');
    }
  };

  render() {
    const {navigation} = this.props;
    const {loading, errors} = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <ImageBackground
        source={require('../assets/images/backgroundLogin.jpg')}
        style={{flex: 1, width: '100%', height: '100%', zIndex: -5}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'android' ? 'height' : 'height'}
          enabled>
          <Block
            padding={[0, theme.sizes.base * 2]}
            style={{margin: 10, flex: 1}}>
            <Text h1 bold white center style={{marginTop: 20}}>
              Login
            </Text>
            <Block middle>
              <Input
                label="Email"
                error={hasErrors('email')}
                style={[styles.input, hasErrors('email')]}
                onChangeText={text => this.setState({email: text})}
              />
              <Input
                secure
                label="Password"
                error={hasErrors('password')}
                style={[styles.input, hasErrors('password')]}
                onChangeText={text => this.setState({password: text})}
              />
              {/* <Input
                secure
                label="Password"
                error={hasErrors('password')}
                style={[styles.input, hasErrors('password')]}
                onChangeText={text => this.setState({password: text})}
              /> */}
              <Button onPress={() => this.handleLogin()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold black center>
                    Login
                  </Text>
                )}
              </Button>

              <Button onPress={() => navigation.navigate('Forgot')}>
                <Text
                  gray
                  caption
                  center
                  style={{textDecorationLine: 'underline'}}>
                  Forgot your password?
                </Text>
              </Button>
              <Button onPress={() => navigation.navigate('SignUp')}>
                <Text
                  gray
                  caption
                  center
                  style={{textDecorationLine: 'underline'}}>
                  Sign up ?
                </Text>
              </Button>
            </Block>
          </Block>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    color: '#fff',
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
