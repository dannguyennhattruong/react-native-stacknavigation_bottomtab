import React, {Component} from 'react';

import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

export default class MissionList extends Component {
  static navigationOptions = {
    title: 'List Trip Activity',
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{marginTop: 40, fontSize: 20}}>
          App List Trip Exist Screen
        </Text>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('More')}>
            <Text style={styles.text}>Go to More</Text>
          </TouchableOpacity>
        </View>
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
