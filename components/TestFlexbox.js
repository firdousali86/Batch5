import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const TestFlexbox = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around', //vertical
        alignItems: 'center', //horizontal
      }}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'orange',
          margin: 5,
        }}></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'green',
          margin: 5,
        }}></View>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          margin: 5,
        }}></View>
    </View>
  );
};

export default TestFlexbox;

const styles = StyleSheet.create({});
