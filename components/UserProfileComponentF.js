import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const UserProfileComponentF = props => {
  console.log('user profile component f got rerendered');

  let {firstName, lastName, cell, email, city, country} = props;
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userCell, setUserCell] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userCountry, setUserCountry] = useState('');

  return (
    <View>
      <Text>User Profile</Text>

      <TextInput
        value={firstName}
        onChangeText={changedText => {
          console.log('first name has changed text: ' + changedText);
        }}
        placeholder="First Name"
        style={styles.textinput}
      />
      <TextInput
        value={lastName}
        onChangeText={() => {}}
        placeholder="Last Name"
        style={styles.textinput}
      />

      <TextInput
        value={cell}
        onChangeText={() => {}}
        placeholder="Cell No"
        style={styles.textinput}
      />
      <TextInput
        value={email}
        onChangeText={() => {}}
        placeholder="Email"
        style={styles.textinput}
      />

      <TextInput
        value={city}
        onChangeText={() => {}}
        placeholder="City"
        style={styles.textinput}
      />
      <TextInput
        value={country}
        onChangeText={() => {}}
        placeholder="Country"
        style={styles.textinput}
      />
      <TouchableOpacity
        onPress={() => {
          //   firstName = 'Leon';
          //   setUserFirstName('Leon' + Date());
        }}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileComponentF;

const styles = StyleSheet.create({
  textinput: {margin: 10, backgroundColor: 'grey', padding: 5},
});
