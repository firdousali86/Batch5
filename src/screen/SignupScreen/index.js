import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const SignupScreen = () => {
  return (
    <View>
      <TextInput value={''} onChangeText={ct => {}} placeholder="Enter Email" />
      <TextInput
        value={''}
        onChangeText={ct => {}}
        placeholder="Enter Password"
      />

      <TouchableOpacity>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
