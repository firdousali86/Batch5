import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const ReactTestScreen = props => {
  const [textToShow, setTextToShow] = useState('');

  return (
    <View>
      <Text testID="welcome">ReactTestScreen</Text>
      <Text>{textToShow}</Text>
      <Button
        testID="hello_button"
        title={'Hello Button'}
        onPress={() => {
          setTextToShow('Hello!!!');
        }}
      />
      <Button
        testID="world_button"
        title={'World Button'}
        onPress={() => {
          props.navigation.navigate('ReactTestScreen2');
        }}
      />
    </View>
  );
};

export default ReactTestScreen;

const styles = StyleSheet.create({});
