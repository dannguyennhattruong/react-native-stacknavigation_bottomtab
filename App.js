import React from 'react';
import {StyleSheet} from 'react-native';

import Navigation from './src/Navigation/Index';
import Block from './src/Components/Block';


export default class App extends React.Component {
  render() {
    return (
      <Block white>
        <Navigation />
      </Block>
    );
  }
}

const styles = StyleSheet.create({});
