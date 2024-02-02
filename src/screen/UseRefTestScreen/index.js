import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React, {useRef} from 'react';

const UseRefTestScreen = () => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  return (
    <View>
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
    </View>
  );
};

export default UseRefTestScreen;

const styles = StyleSheet.create({
  inputStyle: {backgroundColor: 'grey', height: 40, margin: 5},
});
