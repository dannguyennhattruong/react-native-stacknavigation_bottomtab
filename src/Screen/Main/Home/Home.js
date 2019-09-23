import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {Button, Icon} from 'react-native-elements';
import Geolocation from 'react-native-geolocation-service';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      switchValue: false,
      lat: null,
      long: null,
      driverName: 'X',
    };
  }

  async componentDidMount() {
    try {
      // await AsyncStorage.removeItem('driver');
      // await AsyncStorage.removeItem('access-Token');

      await AsyncStorage.getItem('driver', (err, res) => {
        if (!err) {
          const data = JSON.parse(res);
          console.warn(data);
          this.setState({driverName: data.Fullname || data.email || 'X'});
        } else {
          console.warn(err);
        }
      });
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          // title: 'Location Permission',
          // message:
          //   'Cool Photo App needs access to your camera ' +
          //   'so you can take awesome pictures.',
          // buttonNeutral: 'Ask Me Later',
          // buttonNegative: 'Cancel',
          // buttonPositive: 'OK',
        },
      );
      if (granted) {
        this.watchID = Geolocation.watchPosition(
          position => {
            console.warn(position);
            this.setState({
              lat: Number(position.coords.latitude),
              long: Number(position.coords.longitude),
            });
          },
          err => {
            console.warn(err);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
          },
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  toggleSwitch = value => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue: value});
    if (value) Alert.alert('The Trip is accepted automatically right now!');
    //state changes according to switch
    //which will result in re-render the text
  };

  render() {
    return (
      <View style={{flex: 1, width: '100%'}}>
        <View style={styles.header}>
          <Text style={{color: '#fff', margin: 10}}>
            Good evening , Driver {this.state.driverName}
          </Text>
          {/*Switch with value set in constructor*/}
          {/*onValueChange will be triggered after switch condition changes*/}
          <Switch
            onValueChange={this.toggleSwitch}
            value={this.state.switchValue}
          />
        </View>
        <View style={{flex: 8, width: '100%'}}>
          <MapView
            initialRegion={{
              latitude: Number(10.9006351),
              longitude: Number(106.6389138),
              latitudeDelta: 8.5,
              longitudeDelta: 8.5,
            }}
            style={{height: 800}}>
            <Marker
              coordinate={{
                latitude: Number(10.9006351),
                longitude: Number(106.6389138),
              }}
              pinColor="red"
            />
          </MapView>
        </View>
        <View style={{flex: 7, backgroundColor: '#333'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.mission}>
              <Text style={{color: '#fff', fontSize: 13, paddingLeft: 10}}>
                Đang diễn ra
              </Text>
              <Button
                title="Nhiệm vụ >"
                type="outline"
                raised
                onPress={() => this.props.navigation.navigate('MissionList')}
              />
            </View>
            <View style={styles.taikhoan}>
              <Text style={{color: '#fff', fontSize: 13, paddingRight: 30}}>
                0 VND
              </Text>
              <Button
                title="Ví tài khoản >"
                type="outline"
                raised
                onPress={() => this.props.navigation.navigate('HomeWallet')}
              />
            </View>
          </View>
          <View style={styles.containerBody}>
            <View style={styles.wazabike}>
              <Text style={{color: 'orange', fontSize: 25}}>WazaBike</Text>
              <View style={styles.content}>
                <View style={styles.success}>
                  <Icon
                    name="ios-checkbox"
                    type="ionicon"
                    size={24}
                    color="white"
                  />
                  <Text style={{fontSize: 25, color: '#fff'}}>0.00%</Text>
                  <Text style={{fontSize: 13, color: '#fff'}}>
                    Tỉ lệ thành công
                  </Text>
                </View>
                <View style={styles.success}>
                  <Icon
                    name="ios-star-outline"
                    type="ionicon"
                    size={24}
                    color="white"
                  />
                  <Text style={{fontSize: 25, color: '#fff'}}>0.00%</Text>
                  <Text style={{fontSize: 13, color: '#fff'}}>Đánh giá</Text>
                </View>
                <View style={styles.success}>
                  <Icon
                    name="ios-warning"
                    type="ionicon"
                    size={24}
                    color="white"
                  />
                  <Text style={{fontSize: 25, color: '#fff'}}>0.00%</Text>
                  <Text style={{fontSize: 13, color: '#fff'}}>Tỉ lệ hủy</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mission: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 5,
    marginTop: 5,
  },
  taikhoan: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 5,
    marginTop: 5,
  },
  containerBody: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  wazabike: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: 'yellow',
    width: '100%',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
  },
  success: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});
