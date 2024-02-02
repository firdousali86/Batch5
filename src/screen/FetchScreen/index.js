import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useEffect} from 'react';
import ApiHelper from '../../helpers/ApiHelper';

const FetchScreen = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    ApiHelper.get('/todos').then(data => {
      console.log(data);
    });
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
