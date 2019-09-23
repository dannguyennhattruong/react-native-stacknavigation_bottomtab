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
            source={require('../../../assets/icons/mission.png')}
            style={{height: 60, width: 60, margin: 5}}
          />
          <Text bold caption style={{fontSize: 25}}>
            Nhiệm vụ
          </Text>
        </View>
        <View style={{flex: 4, flexDirection: 'column'}}>
          <Text bold shadow style={{padding:5}}>
            Nhiệm vụ ngày
          </Text>
          <Card color="white" style={styles.cardStyle}>
            <Text style={{fontSize: 20, margin: 5}}>
              Nhận trên 5 cuốc xe:{' '}
              <Text bold style={{fontSize: 20, color: 'tomato'}}>
                5wz
              </Text>
            </Text>
            <Text style={{fontSize: 20, margin: 5}}>
              Nhận cuốc xe từ 10h-12h:{' '}
              <Text bold style={{fontSize: 20, color: 'tomato'}}>
                10wz
              </Text>
            </Text>
            <Text style={{fontSize: 20, margin: 5}}>
              Nhận cuốc ở khu vực Tân Bình, Gò Vấp:{' '}
              <Text bold style={{fontSize: 20, color: 'tomato'}}>
                10wz
              </Text>
            </Text>
          </Card>
        </View>
        <View style={{flex: 4}}>
          <Text bold shadow style={{padding:5}}>
            Nhiệm vụ tháng
          </Text>
          <Card color="white" style={styles.cardStyle}>
            <Text style={{fontSize: 20, margin: 5}}>
              Số cuốc nhận trên 30{' '}
              <Text bold style={{fontSize: 20, color: 'tomato'}}>
                30wz
              </Text>
            </Text>
            <Text style={{fontSize: 20, margin: 5}}>
              Số cuốc hủy dưới 5{' '}
              <Text bold style={{fontSize: 20, color: 'tomato'}}>
                20wz
              </Text>
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
