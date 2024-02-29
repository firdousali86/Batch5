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
import { FirestoreHelper } from '../../helpers';
import Input from '../../components/Input';
import { Formik, Field } from 'formik';
import { signupSchema } from '../../schemas'
import DropDownPicker from 'react-native-dropdown-picker';

const SignupScreen = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);

  let items = [
    { label: 'Spain', value: 'spain' },
    { label: 'Madrid', value: 'madrid', parent: 'spain' },
    { label: 'Barcelona', value: 'barcelona', parent: 'spain' },

    { label: 'Italy', value: 'italy' },
    { label: 'Rome', value: 'rome', parent: 'italy' },

    { label: 'Finland', value: 'finland' }
  ]

  const onSignupPressed = async (payload) => {
    try {
      let res = await auth().createUserWithEmailAndPassword(payload.email, payload.password)
      let firestoreResponse = await FirestoreHelper.setUserData(payload)
      firestoreResponse.success ? alert('User Register and data store') : alert('User Registered, data not stored!')
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
      <Formik
        validationSchema={signupSchema}
        initialValues={{
          email: '',
          password: '',
          firstName: '',
          lastName: '',
          address: '',
          age: '',
          location: null
        }
        }
        onSubmit={values => {
          console.log(values)
          // onSignupPressed(values)
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, setFieldValue }) => (
          <View>
            <Input
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="Enter Email"
              style={styles.textInput}
              autoCapitalize="none"
              errorMessage={errors.email}
            />
            <Input
              value={values.password}
              onChangeText={
                handleChange('password')
              }
              placeholder="Enter Password"
              style={styles.textInput}
              autoCapitalize="none"
              errorMessage={errors.password}
            />
            <Input
              value={values.firstName}
              onChangeText={
                handleChange('firstName')
              }
              placeholder="Enter FirstName"
              style={styles.textInput}
              autoCapitalize="none"
              errorMessage={errors.firstName}
            />
            <Input
              value={values.lastName}
              onChangeText={
                handleChange('lastName')
              }
              placeholder="Enter LastName"
              style={styles.textInput}
              autoCapitalize="none"
              errorMessage={errors.lastName}
            />
            <Input
              value={values.address}
              onChangeText={
                handleChange('address')
              }
              placeholder="Enter Address"
              style={styles.textInput}
              autoCapitalize="none"
              errorMessage={errors.address}
            />
            <Input
              value={values.age}
              onChangeText={
                handleChange('age')
              }
              keyboardType='number-pad'
              placeholder="Enter Age"
              style={styles.textInput}
              autoCapitalize="none"
              errorMessage={errors.age}
            />

            <DropDownPicker
              containerStyle={{ padding: 5 }}
              dropDownContainerStyle={{ margin: 5 }}
              open={open}
              value={values.location}
              items={items}
              setOpen={setOpen}
              onSelectItem={(v) => {
                setFieldValue('location', v.value)
              }}
              theme="DARK"
              mode="BADGE"
              badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
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
              onPress={() => handleSubmit()}
            >
              <Text>Signup</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

    </View >

  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#d3d3d3',
    height: 40,
    margin: 5,
  },
});
