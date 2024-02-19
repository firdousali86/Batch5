import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { LocationHelper } from '../../helpers';
const MapScreen = () => {

  const locations = [
    {
      latitude: 37.78825,
      longitude: -122.4324
    },
    {
      latitude: 38.78825,
      longitude: -122.4324
    },
    {
      latitude: 37.78825,
      longitude: -122.4324
    }, {
      latitude: 39.78825,
      longitude: -122.4324
    }
  ]

  const [currentLocation, setCurrentLocation] = useState(null)

  useEffect(() => {
    // LocationHelper.getCurrentLocation((postion) => {
    //   setCurrentLocation(postion)
    // })
    LocationHelper.watchUserLocation((position) => {
      setCurrentLocation(position)
    })
  }, [])

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: currentLocation ? currentLocation.coords.latitude : 37.78825,
          longitude: currentLocation ? currentLocation.coords.longitude : -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>

        {
          currentLocation ?
            <Marker
              title='Test Title'
              coordinate={{
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
              }}
            /> : null
        }




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
