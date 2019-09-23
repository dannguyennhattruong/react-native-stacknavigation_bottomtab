// import React, {Component} from 'react';

// import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

// export default class HomeWallet extends Component {
//   static navigationOptions = {
//     title: 'Profile Activity',
//   };

//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <Text style={{marginTop: 40, fontSize: 20}}>App Wallet Screen</Text>

//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => this.props.navigation.navigate('Home')}>
//             <Text style={styles.text}>Go to Home</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5fcff',
//     padding: 11,
//   },

//   button: {
//     alignItems: 'center',
//     backgroundColor: '#43A047',
//     padding: 12,
//     width: 280,
//     marginTop: 12,
//   },

//   text: {
//     color: '#fff',
//   },
// });
import React, {Component} from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

export default class WalletHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
    };
  }

  async componentDidMount() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted) {
        this.watchID = Geolocation.watchPosition(
          position => {
            // Create the object to update this.state.mapRegion through the onRegionChange function
            // let region = {
            //   latitude: position.coords.latitude,
            //   longitude: position.coords.longitude,
            //   latitudeDelta: 0.00922 * 1.5,
            //   longitudeDelta: 0.00421 * 1.5,
            // };
            // this.onRegionChange(region, region.latitude, region.longitude);
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
            // showLocationDialog: true,
            // forceRequestLocation: true,
            interval: 10000,
          },
        );
      }
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text> Lat: {this.state.lat} </Text>
        <Text> Long :{this.state.long} </Text>
        <MapView
          initialRegion={{
            latitude: Number(10.9006351),
            longitude: Number(106.6389138),
            latitudeDelta: 8.5,
            longitudeDelta: 8.5,
          }}
          clustering={true}
          style={{width: 400, height: 800}}>
          <Marker
            coordinate={{
              latitude: Number(this.state.lat),
              longitude: Number(this.state.long),
            }}
            pinColor="blue"
          />
        </MapView>
      </View>
    );
  }
}
