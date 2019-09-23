import React, {Component} from 'react';

import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Text, Card} from '../../../Components/index';

export default class MissionList extends Component {
  static navigationOptions = {
    title: 'Thống kê Activity',
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View style={styles.smallTab}>
          <Image
            source={require('../../../assets/icons/thongkee.png')}
            style={{height: 60, width: 60, margin: 5}}
          />
          <Text bold caption style={{fontSize: 25}}>
            Thống kê
          </Text>
        </View>
        <View style={{flex: 4, flexDirection: 'column'}}>
          <Text
            bold
            shadow
            style={{padding: 5, textDecorationLine: 'underline'}}>
            Thống kê theo tuần
          </Text>
          <Card color="white" style={styles.cardStyle}>
            <Text style={{fontSize: 20, margin: 5}} bold>
              Số cuốc nhận:{' '}
              <Text style={{fontSize: 20, color: 'green'}}>12</Text>
            </Text>
            <Text style={{fontSize: 20, margin: 5}} bold>
              Số cuốc hủy: <Text style={{fontSize: 20, color: 'green'}}>3</Text>
            </Text>
            <Text style={{fontSize: 20, margin: 5}} bold>
              Tổng số cuốc:{' '}
              <Text style={{fontSize: 20, color: 'green'}}>15</Text>
            </Text>
            <Text style={{fontSize: 20, margin: 5}} bold>
              Tổng số tiền nhận:{' '}
              <Text style={{fontSize: 20, color: 'green'}}>1.200.000</Text>
            </Text>
          </Card>
        </View>
        <View style={{flex: 4}}>
          <Text
            bold
            shadow
            style={{padding: 5, textDecorationLine: 'underline'}}>
            Thống kê theo tháng
          </Text>
          <Card color="white" style={styles.cardStyle}>
            <Text style={{fontSize: 20, margin: 5}} bold>
              Số cuốc nhận:{' '}
              <Text style={{fontSize: 20, color: 'green'}}>12</Text>
            </Text>
            <Text style={{fontSize: 20, margin: 5}} bold>
              Số cuốc hủy: <Text style={{fontSize: 20, color: 'green'}}>3</Text>
            </Text>
            <Text style={{fontSize: 20, margin: 5}} bold>
              Tổng số cuốc:{' '}
              <Text style={{fontSize: 20, color: 'green'}}>15</Text>
            </Text>
            <Text style={{fontSize: 20, margin: 5}} bold>
              Tổng số tiền nhận:{' '}
              <Text style={{fontSize: 20, color: 'green'}}>1.200.000</Text>
            </Text>
          </Card>
        </View>
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
  cardStyle: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: '#222',
    margin: 10,
    borderRadius: 2,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
