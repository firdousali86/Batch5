import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <TextInput value={''} onChangeText={ct => {}} placeholder="Enter Email" />
      <TextInput
        value={''}
        onChangeText={ct => {}}
        placeholder="Enter Password"
      />

      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>

      <Button
        title="Go to Signup"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
