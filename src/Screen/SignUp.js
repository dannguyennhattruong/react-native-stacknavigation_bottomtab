import React, {Component} from 'react';
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';

import {Button, Block, Input, Text} from '../Components/index';
import {theme} from '../Constant';

export default class SignUp extends Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false,
  };

  handleSignUp() {
    const {navigation} = this.props;
    const {email, username, password} = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({loading: true});

    // check with backend API or with some static data
    if (!email) errors.push('email');
    if (!username) errors.push('username');
    if (!password) errors.push('password');

    this.setState({errors, loading: false});

    if (!errors.length) {
      Alert.alert(
        'Success!',
        'Your account has been created',
        [
          {
            text: 'Continue',
            onPress: () => {
              navigation.navigate('Browse');
            },
          },
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    const {navigation} = this.props;
    const {loading, errors} = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);

    return (
      <ImageBackground
        source={require('../assets/images/SignUp2.jpg')}
        style={{flex: 1, width: '100%', height: '100%'}}>
        <KeyboardAvoidingView style={styles.signup} behavior="height">
          <Block padding={[0, theme.sizes.base * 2]}>
            <Text h1 white center bold style={{marginTop:50}}>
              Sign Up
            </Text>
            <Block middle>
              <Input
                email
                label="Email"
                error={hasErrors('email')}
                style={[styles.input, hasErrors('email')]}
                defaultValue={this.state.email}
                onChangeText={text => this.setState({email: text})}
              />
              <Input
                secure
                label="Password"
                error={hasErrors('password')}
                style={[styles.input, hasErrors('password')]}
                defaultValue={this.state.password}
                onChangeText={text => this.setState({password: text})}
              />
              <Button gradient onPress={() => this.handleSignUp()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold black center>
                    Sign Up
                  </Text>
                )}
              </Button>

              <Button onPress={() => navigation.navigate('Login')}>
                <Text
                  gray
                  caption
                  center
                  style={{textDecorationLine: 'underline'}}>
                  Back to Login
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
  signup: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    color:'#fff'
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});
