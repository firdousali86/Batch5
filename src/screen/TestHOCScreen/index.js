import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {useState} from 'react';
import WithDataFetching from './WithDataFetching';

const TestHOCScreen = ({data, loading, error}) => {
  const [textinput, settextinput] = useState('');

  console.log('===============');
  console.log(data);
  console.log('===============');

  return (
    <View>
      <Text>index</Text>
      <TextInput value={textinput} onChangeText={settextinput} placeholder="" />
    </View>
  );
};

export default WithDataFetching(
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
)(TestHOCScreen);

const styles = StyleSheet.create({});
