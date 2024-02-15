import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {kApiSignup} from '../../config/WebService';
import {useDispatch} from 'react-redux';
import {request} from '../../features/user/userSlice';

const SignupScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={ct => {
          setEmail(ct);
        }}
        placeholder="Enter Email"
        style={styles.textInput}
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
        placeholder="Enter Password"
        style={styles.textInput}
        autoCapitalize="none"
      />

      <TouchableOpacity
        style={{
          height: 50,
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          dispatch(request({url: kApiSignup, data: {email, password}}));
        }}>
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'pink',
    height: 40,
    margin: 5,
  },
});
