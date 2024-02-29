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
import Input from '../../components/Input';
import { useTranslation } from 'react-i18next';
import i18n from '../../localization/i18n';
import { useForm, Controller } from 'react-hook-form'
import ReactFormInput from '../../components/InputReactForm';
const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const { t, i18n } = useTranslation()
  const { control, handleSubmit,
    formState: { errors, isValid } } = useForm()

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


  useEffect(() => {
    if (email.includes('@') && email.includes('.')) {
      setEmailValidation(true)
    } else {
      setEmailValidation(false)
    }
    if (password.length > 6) {
      setPasswordValidation(true)
    } else {
      setPasswordValidation(false)
    }
  }, [email, password])

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

  const onSubmit = (data) => {
    console.log(data)
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return (
    <View>

      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'KodeMono'
      }}>{t('welcome')}</Text>

      <Text style={{
        fontSize: 24,
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'KodeMono-SemiBold'
      }}>Hello World</Text>
      {/* 
      <Controller
        control={control}
        name='email'
        rules={{
          required: {
            value: true,
            message: 'Email is required'
          },
          minLength: {
            value: 10
          },
          pattern: {
            value: emailRegex,
            message: 'Invalid Email'
          }
        }}
        render={({ field: { onChange,
          value, onBlur }, fieldState: { error } }) => (
          <View>
            <Input
              value={value}
              onChangeText={onChange}
              placeholder="Enter Email"
              style={styles.textInput}
              onBlur={onBlur}
              errorMessage={error ? error.message : null}
            />

          </View>

        )}

      /> */}

      <ReactFormInput
        control={control}
        name="email"
        placeholder="Please enter the email"
        rules={{
          required: {
            value: true,
            message: 'Please enter the email'
          },
          minLength: {
            value: 5,
            message: 'Minimum Length is 5'
          },
          pattern: {
            value: emailRegex,
            message: 'Email Invalid'
          }
        }}

      />

      <ReactFormInput
        control={control}
        name={"password"}
        placeholder={'Enter your password'}
        rules={{
          minLength: {
            value: 6,
            message: 'Please enter 6 or more character for password!'
          },
          required: {
            value: true,
            message:'Password is required'
          }
        }}

      />

      {/* <Input
        value={password}
        onChangeText={ct => {
          setPassword(ct);
        }}
        placeholder="Enter Password"
        style={styles.textInput}
        autoCapitalize="none"
        error={passwordValidation}
        errorMessage={'Password should be greater than 6 characters!'}
      /> */}
      <Button
        title='Login'
        // onPress={() => {
        //   dispatch(request({ url: kApiLogin, data: { email, password } }));
        // }}
        // onPress={() => onLoginPressed()}
        onPress={handleSubmit(onSubmit)}
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
        style={{ alignSelf: 'center' }}
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
  error: {
    color: 'red'
  }
});
