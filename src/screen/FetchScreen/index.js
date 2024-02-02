import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const FetchScreen = () => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });

    // response
    //   .then(data => {
    //     return data.json();
    //   })
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default FetchScreen;

const styles = StyleSheet.create({});
