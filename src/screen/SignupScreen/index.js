import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { kApiSignup } from '../../config/WebService';
import { useDispatch } from 'react-redux';
import { request } from '../../features/user/userSlice';
import auth from '@react-native-firebase/auth';

const SignupScreen = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSignupPressed = async () => {
    try {
      let res = await auth().createUserWithEmailAndPassword(email, password)
      alert('User Registered')
    } catch (e) {
      console.log(e)
      alert(e)
    }
    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     alert('User account created & signed in!');
    //   })
    //   .catch(error => {
    //     // if (error.code === 'auth/email-already-in-use') {
    //     //   alert('That email address is already in use!');
    //     // }

    //     // if (error.code === 'auth/invalid-email') {
    //     //   alert('That email address is invalid!');
    //     // }
    //     alert(error.message)
    //   });
  }

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
        // onPress={() => {
        //   // dispatch(request({url: kApiSignup, data: {email, password}}));

        // }}>
        onPress={() => onSignupPressed()}
      >
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
