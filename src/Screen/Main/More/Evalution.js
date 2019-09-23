import React, {Component} from 'react';

import {Text, View, Image, StyleSheet, ScrollView} from 'react-native';

import {Block} from '../../../Components/index';

export default class MissionList extends Component {
  static navigationOptions = {
    title: 'Evalution Activity',
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <View style={styles.smallTab}>
            <Image
              source={require('../../../assets/icons/comment.png')}
              style={{height: 60, width: 60, margin: 5}}
            />
            <Text bold caption style={{fontSize: 25}}>
              Đánh giá từ khách hàng
            </Text>
          </View>
          <View style={{flex: 8}}>
            <Block style={styles.smallBox}>
              <View style={styles.boxInside}>
                <Text>6/06/2019</Text>
                <Text>Tuyệt cú mèo</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/icons/starY.png')}
                  style={{height: 60, width: 60, margin: 5}}
                />
              </View>
            </Block>
            <Block style={styles.smallBox}>
              <View style={styles.boxInside}>
                <Text>6/06/2019</Text>
                <Text>Tuyệt cú mèo</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/icons/starY.png')}
                  style={{height: 60, width: 60, margin: 5}}
                />
              </View>
            </Block>
            <Block style={styles.smallBox}>
              <View style={styles.boxInside}>
                <Text>6/06/2019</Text>
                <Text>Tuyệt cú mèo</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/icons/starY.png')}
                  style={{height: 60, width: 60, margin: 5}}
                />
              </View>
            </Block>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#f5fcff',
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
  smallTab: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  smallBox: {
    flexDirection: 'row',
    flex: 1,
    margin: 5,
    // boxShadow: '4px 6px 25px -4px rgba(0,0,0,0.75)',
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 3,
  },
  boxInside: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    padding: 10,
  },
});
