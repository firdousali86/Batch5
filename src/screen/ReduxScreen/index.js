import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../../features/counter/counterSlice';

const ReduxScreen = () => {
  const [customVal, setCustomVal] = useState(0);
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.counter.value);

  return (
    <View>
      <Button
        title={'Increment'}
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button
        title={'Decrement'}
        onPress={() => {
          dispatch(decrement());
        }}
      />

      <TextInput
        value={customVal}
        onChangeText={ct => {
          setCustomVal(ct);
        }}
        placeholder="Increment amount"
      />

      <Button
        title={'Increment by amount'}
        onPress={() => {
          dispatch(incrementByAmount(parseInt(customVal)));
        }}
      />

      <Text>{counterValue}</Text>
    </View>
  );
};

export default ReduxScreen;

const styles = StyleSheet.create({});
