import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const UserControl = props => {
  //first use case of useffect, it always has empty dependency array
  useEffect(() => {
    //any logic u put here will only run once i.e at load time (after render)
    //u can call apis here,

    console.log('useeffect with first case');
  }, []);

  //second use case of useeffect
  useEffect(() => {
    console.log('HEY! first name just got changed');
  }, [props.firstName]);

  useEffect(() => {
    console.log('HEY! last name just got changed');
  }, [props.lastName]);

  //fourth usecase of useeffect
  useEffect(() => {
    console.log('fourth one got run');
  });

  console.log('usercontrol got rerendered');

  const {firstName, lastName} = props;

  return (
    <View>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
    </View>
  );
};

export default UserControl;

const styles = StyleSheet.create({});
