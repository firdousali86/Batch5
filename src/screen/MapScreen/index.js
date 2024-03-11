import {StyleSheet, Text, View, Platform, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {LocationHelper, PermissionHelper} from '../../helpers';
// import messaging from '@react-native-firebase/messaging';
import NotificationHelper from '../../helpers/NotificationHelper';

const MapScreen = props => {
  const locations = [
    {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    {
      latitude: 38.78825,
      longitude: -122.4324,
    },
    {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    {
      latitude: 39.78825,
      longitude: -122.4324,
    },
  ];

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    PermissionHelper.requestLocationPermissionForAndroid();
    // Platform.OS == 'ios' ?
    //   PermissionHelper.rquestNotificationPermissionForiOS() :
    //   PermissionHelper.requestNotificationPermissionForAndorid()
    // LocationHelper.getCurrentLocation((postion) => {
    //   setCurrentLocation(postion)
    // })
    LocationHelper.watchUserLocation(position => {
      setCurrentLocation(position);
    });
  }, []);

  const loadToken = async () => {
    let token = await NotificationHelper.getDeviceToken();
    console.log(token);
  };

  useEffect(() => {
    loadToken();
    // const unsubscribe = messaging().onMessage(async remoteMessage => {
    //   // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    //   if (remoteMessage.data.route == 'Home') {
    //     props.navigation.navigate('Home');
    //   }
    // });

    // messaging().setBackgroundMessageHandler(async remoteMessage => {
    //   console.log('Message handled in the background!', remoteMessage);
    // });

    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: currentLocation
            ? currentLocation.coords.latitude
            : 37.78825,
          longitude: currentLocation
            ? currentLocation.coords.longitude
            : -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        {currentLocation ? (
          <Marker
            title="Test Title"
            coordinate={{
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
            }}
          />
        ) : null}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
