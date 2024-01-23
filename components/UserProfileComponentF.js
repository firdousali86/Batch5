import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const UserProfileComponentF = props => {
  // console.log('user profile component f got rerendered');

  // console.log(props);

  console.log('USER PROFILE FUNCTIONAL COMPONENT GOT RERENDERED');

  let {firstName, lastName, cell, email, city, country} = props;

  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userCell, setUserCell] = useState(cell);
  const [userEmail, setUserEmail] = useState(email);
  const [userCity, setUserCity] = useState(city);
  const [userCountry, setUserCountry] = useState(country);

  return (
    <View>
      <Text>User Profile</Text>

      <TextInput
        value={userFirstName}
        onChangeText={changedText => {
          setUserFirstName(changedText);
        }}
        placeholder="First Name"
        style={styles.textinput}
      />
      <TextInput
        value={userLastName}
        onChangeText={ct => {
          setUserLastName(ct);
        }}
        placeholder="Last Name"
        style={styles.textinput}
      />

      <TextInput
        value={userCell}
        onChangeText={ct => {
          setUserCell(ct);
        }}
        placeholder="Cell No"
        style={styles.textinput}
      />
      <TextInput
        value={userEmail}
        onChangeText={ct => {
          setUserEmail(ct);
        }}
        placeholder="Email"
        style={styles.textinput}
      />

      <TextInput
        value={userCity}
        onChangeText={ct => {
          setUserCity(ct);
        }}
        placeholder="City"
        style={styles.textinput}
      />
      <TextInput
        value={userCountry}
        onChangeText={ct => {
          setUserCountry(ct);
        }}
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
