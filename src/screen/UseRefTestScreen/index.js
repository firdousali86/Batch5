import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useRef, useState} from 'react';
import {MapControl} from '../../components';

const UseRefTestScreen = () => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const mymapcontrolref = useRef(null);

  const [datetime, setdatetime] = useState(Date.now());

  let counterVar = useRef(0);

  console.log('use ref screen rerender');

  return (
    <View style={{flex: 1}}>
      <Text>index</Text>

      <TextInput
        ref={input1Ref}
        onChangeText={ct => {}}
        style={styles.inputStyle}
      />
      <TextInput
        ref={input2Ref}
        onChangeText={ct => {}}
        style={styles.inputStyle}
      />
      <TextInput
        ref={input3Ref}
        onChangeText={ct => {}}
        style={styles.inputStyle}
      />

      <Button
        title={'Focus'}
        onPress={() => {
          //   input3Ref.current.focus();
          input2Ref.current.clear();
        }}
      />
      <Button
        title={'Increment'}
        onPress={() => {
          counterVar.current += 1;

          console.log(counterVar.current);

          setdatetime(Date.now());
        }}
      />
      <MapControl ref={mymapcontrolref} />
      <Button
        title={'Goto london'}
        onPress={() => {
          //do something to navigate map to london
          mymapcontrolref.current?.takemetolondon();
        }}
      />
      <Button
        title={'Goto karachi'}
        onPress={() => {
          //do something to navigate map to london
          mymapcontrolref.current?.takemetokarachi();
        }}
      />
    </View>
  );
};

export default UseRefTestScreen;

const styles = StyleSheet.create({
  inputStyle: {backgroundColor: 'grey', height: 40, margin: 5},
});
