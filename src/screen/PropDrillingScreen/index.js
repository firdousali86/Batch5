import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, createContext, useContext, memo} from 'react';

const UserContext = createContext();

const PropDrillingScreen = () => {
  return (
    <View>
      <Text>index</Text>
      <Component1 />
    </View>
  );
};

function Component1() {
  const [user, setUser] = useState('Jesse Hall');

  console.log('Component1');

  return (
    <View style={{backgroundColor: 'red', margin: 5}}>
      <Text>{`Hello ${user}!`}</Text>
      <TextInput
        value={user}
        onChangeText={ct => {
          setUser(ct);
        }}
        placeholder="User"
        style={{backgroundColor: 'white', height: 60, margin: 5}}
      />
      <UserContext.Provider value={user}>
        <Component2 />
      </UserContext.Provider>
    </View>
  );
}

const Component2 = memo(() => {
  console.log('Component2');
  return (
    <View style={{backgroundColor: 'blue', margin: 5}}>
      <Text>Component 2</Text>
      <Component3 />
    </View>
  );
});

function Component3() {
  console.log('Component3');
  return (
    <View style={{backgroundColor: 'green', margin: 5}}>
      <Text>Component 3</Text>
      <Component4 />
    </View>
  );
}

function Component4() {
  console.log('Component4');
  return (
    <View style={{backgroundColor: 'yellow', margin: 5}}>
      <Text>Component 4</Text>
      <Component5 />
    </View>
  );
}

function Component5() {
  const user = useContext(UserContext);

  console.log('Component5');
  return (
    <View style={{backgroundColor: 'pink', margin: 5}}>
      <Text>Component 5</Text>
      <Text>{`Hello ${user} again!`}</Text>
    </View>
  );
}

export default PropDrillingScreen;

const styles = StyleSheet.create({});
