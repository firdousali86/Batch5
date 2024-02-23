import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { login, request } from '../../features/user/userSlice';
import { useDispatch } from 'react-redux';
import { kApiLogin } from '../../config/WebService';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  //Initializing
  GoogleSignin.configure({
    webClientId: '1064615829929-etlf5vrviko9287tt7177snim1uk7vh2.apps.googleusercontent.com',
  });
  

  const onLoginPressed = () => {
    auth().signInWithEmailAndPassword(email, password).then(() => {
      alert('User Logged In')
    }).catch((err) => {
      alert(err.message)
    })
  }

  const onForgetPressed = () => {
    auth().sendPasswordResetEmail(email).then(() => {
      alert('An email has been sent your mail address, do check the spam section!')
    }).catch((err) => {
      alert(err.message)
    })
  }


  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (e) {
      console.log(e)
    }
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

      <Button
        title='Login'
        // onPress={() => {
        //   dispatch(request({ url: kApiLogin, data: { email, password } }));
        // }}
        onPress={() => onLoginPressed()}
      />

      <Button
        title='Forget Password?'
        // onPress={() => {
        //   dispatch(request({ url: kApiLogin, data: { email, password } }));
        // }}
        onPress={() => onForgetPressed()}
      />

      <Button
        title="Go to Signup"
        onPress={() => {
          navigation.navigate('Signup');
        }}
      />
      <GoogleSigninButton
        title="Google Sign-In"
        style={{alignSelf:'center'}}
        onPress={() => onGoogleButtonPress()
          .then(() => console.log('Signed in with Google!'))
          .catch((e) => {
            console.log(e)
          })}
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
