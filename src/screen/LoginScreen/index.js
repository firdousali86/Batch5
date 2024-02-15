import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import {login, request} from '../../features/user/userSlice';
import {useDispatch} from 'react-redux';
import {kApiLogin} from '../../config/WebService';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

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
        onPress={() => {
          dispatch(request({url: kApiLogin, data: {email, password}}));
        }}>
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

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'pink',
    height: 40,
    margin: 5,
  },
});
