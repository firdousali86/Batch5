import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen, DetailsScreen} from '../screen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        initialParams={{
          sessionName: 'some initial value of session name',
          BatchNumber: 0,
        }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
