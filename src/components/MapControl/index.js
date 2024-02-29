import {StyleSheet, Text, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState, useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const MapControl = forwardRef((props, ref) => {
  console.log('======================');
  console.log('the map got rerendered');
  console.log('======================');

  const realmapref = useRef(null);
  const [currentRegion, setCurrentRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useImperativeHandle(ref, () => ({
    takemetolondon: () => {
      realmapref.current.animateToRegion(
        {
          ...currentRegion,
          latitude: 51.5285262,
          longitude: -0.2664023,
        },
        1500,
      );
      //   setCurrentRegion({
      //     ...currentRegion,
      //     latitude: 51.5285262,
      //     longitude: -0.2664023,
      //   });
    },
    takemetokarachi: () => {
      realmapref.current.animateToRegion(
        {
          ...currentRegion,
          latitude: 25.1928371,
          longitude: 66.8258195,
        },
        1500,
      );

      //   setCurrentRegion({
      //     ...currentRegion,
      //     latitude: 25.1928371,
      //     longitude: 66.8258195,
      //   });
    },
  }));

  return (
    <View style={{backgroundColor: 'red', flex: 1}}>
      <MapView
        ref={realmapref}
        showsUserLocation={true}
        showsMyLocationButton={true}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={currentRegion}
      />
    </View>
  );
});

export default MapControl;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
