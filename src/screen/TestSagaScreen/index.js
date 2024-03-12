import {StyleSheet, Text, View, Button, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  request,
  requestEvery,
  requestLatest,
} from '../../features/item/itemSlice';
import {logout} from '../../features/user/userSlice';
import {kApiGetItems, kApiPostItems, kApiTodos} from '../../config/WebService';
import Config from 'react-native-config';

const TestSagaScreen = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');

  //   useEffect(() => {

  //   }, []);

  return (
    <View>
      <Text>{Config.ENV}</Text>
      <Text>{Config.API_URL}</Text>
      <TextInput
        value={title}
        onChangeText={ct => {
          setTitle(ct);
        }}
        placeholder="Enter title"
        style={styles.textInput}
      />
      <TextInput
        value={details}
        onChangeText={ct => {
          setDetails(ct);
        }}
        placeholder="Enter Details"
        style={styles.textInput}
      />
      <TextInput
        value={image}
        onChangeText={ct => {
          setImage(ct);
        }}
        placeholder="Enter Image"
        style={styles.textInput}
      />
      <Button
        title={'Post Item'}
        onPress={() => {
          dispatch(
            request({
              url: kApiPostItems,
              data: {title, details, image},
              method: 'POST',
            }),
          );
        }}
      />
      <Button
        title={'Call Take Items'}
        onPress={() => {
          dispatch(request({url: kApiTodos, method: 'GET'}));
        }}
      />
      <Button
        title={'Call TakeEvery Items'}
        onPress={() => {
          dispatch(requestEvery({url: kApiTodos, method: 'GET'}));
        }}
      />
      <Button
        title={'Call TakeLatest Items'}
        onPress={() => {
          dispatch(requestLatest({url: kApiTodos, method: 'GET'}));
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

const styles = StyleSheet.create({
  textInput: {backgroundColor: 'orange', height: 60, margin: 10},
});
