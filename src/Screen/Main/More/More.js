import React, {Component} from 'react';

import {View, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import {Icon} from 'react-native-elements';
import {Text, Block} from '../../../Components/index';
import AsyncStorage from '@react-native-community/async-storage';

export default class More extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: (
        <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              padding: 15,
              width: 200,
            }}>
            <Icon name="ios-contact" type="ionicon" color="#fff" size={30} />
            <Text bold white>
              Driver
            </Text>
          </View>
          <View style={{flex: 8, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Text bold white shadow>
                Đan Nguyễn Nhật Trường
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ),
    };
  };

  _logoutDriver = async () => {
    const item = 'access-Token';
    const value = AsyncStorage.getItem(item);
    if (value !== null) {
      await AsyncStorage.removeItem(item);
      this.props.navigation.navigate('Logout');
    } else {
      Alert.alert('Something went wrong !! :(');
    }
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Block wrap shadow card>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Rank')}
            style={styles.TouchableOpacity}>
            <View style={styles.smallTabs}>
              <Image
                source={require('../../../assets/icons/rank.png')}
                style={{height: 20, width: 20, margin: 5}}
              />

              <Text bold black style={{margin: 10}}>
                Rank
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Support')}
            style={styles.TouchableOpacity}>
            <View style={styles.smallTabs}>
              <Image
                source={require('../../../assets/icons/support.png')}
                style={{height: 20, width: 20, margin: 5}}
              />

              <Text bold black style={{margin: 10}}>
                Hỗ trợ
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ThongKe')}
            style={styles.TouchableOpacity}>
            <View style={styles.smallTabs}>
              <Image
                source={require('../../../assets/icons/thongke.jpg')}
                style={{height: 20, width: 20, margin: 5}}
              />

              <Text bold black style={{margin: 10}}>
                Thống kê
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Reward')}
            style={styles.TouchableOpacity}>
            <View style={styles.smallTabs}>
              <Image
                source={require('../../../assets/icons/reward.png')}
                style={{height: 20, width: 20, margin: 5}}
              />

              <Text bold black style={{margin: 10}}>
                Điểm thưởng
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Evalution')}
            style={styles.TouchableOpacity}>
            <View style={styles.smallTabs}>
              <Image
                source={require('../../../assets/icons/evaluation.png')}
                style={{height: 20, width: 20, margin: 5}}
              />

              <Text bold black style={{margin: 10}}>
                Đánh giá từ khách hàng
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('MissionMore')}
            style={styles.TouchableOpacity}>
            <View style={styles.smallTabs}>
              <Image
                source={require('../../../assets/icons/mission.png')}
                style={{height: 20, width: 20, margin: 5}}
              />

              <Text bold black style={{margin: 10}}>
                Nhiệm vụ
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ListTripExist')}
            style={styles.TouchableOpacity}>
            <View style={styles.TouchableOpacity}>
              <Image
                source={require('../../../assets/icons/trip.png')}
                style={{height: 20, width: 20, margin: 5}}
              />

              <Text bold black style={{margin: 10}}>
                Danh sách chuyến đi tồn tại
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this._logoutDriver()}
            style={styles.TouchableOpacity}>
            <View style={styles.TouchableOpacity}>
              <Image
                source={require('../../../assets/icons/trip.png')}
                style={{height: 20, width: 20, margin: 5}}
              />

              <Text bold black style={{margin: 10}}>
                Logout
              </Text>
            </View>
          </TouchableOpacity>

          <View style={{flex: 6, borderWidth: 0.5, borderColor: '#222'}} />
        </Block>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    flexDirection: 'column',
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

  smallTabs: {
    borderBottomColor: '#333',
    borderBottomWidth: 0.5,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  TouchableOpacity: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
});
