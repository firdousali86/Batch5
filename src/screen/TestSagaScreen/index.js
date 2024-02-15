import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {request} from '../../features/item/itemSlice';
import {logout} from '../../features/user/userSlice';
import {kApiGetItems} from '../../config/WebService';

const TestSagaScreen = () => {
  const dispatch = useDispatch();

  //   useEffect(() => {

  //   }, []);

  return (
    <View>
      <Text>index</Text>
      <Button
        title={'Call Api'}
        onPress={() => {
          dispatch(request({url: kApiGetItems}));
        }}
      />
      <Button
        title={'Logout'}
        onPress={() => {
          dispatch(logout());
        }}
      />
    </View>
  );
};

export default TestSagaScreen;

const styles = StyleSheet.create({});
