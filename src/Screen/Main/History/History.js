import React, {Component} from 'react';

import {Text, View, StyleSheet} from 'react-native';

export default class History extends Component {
  static navigationOptions = {
    title: 'History Activity',
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{marginTop: 40, fontSize: 20}}>App History Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11,
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },

  text: {
    color: '#fff',
  },
});
