import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import ApiHelper from '../../helpers/ApiHelper';

const FetchScreen = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    ApiHelper.get('https://jsonplaceholder.typicode.com/todos').then(data => {
      console.log(data);
    });
    // const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    // const responseJson = await response.json();
    // console.log(responseJson);
    // console.log('sdfsd');
  };

  return (
    <View>
      <Text>index</Text>
      <Button
        title={'Get object'}
        onPress={() => {
          //   console.log(ApiHelper.getMyObject());
        }}
      />
    </View>
  );
};

export default FetchScreen;

const styles = StyleSheet.create({});
