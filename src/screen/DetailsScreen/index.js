import {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import styles from './styles';
import UserControl from './UserControl';

const DetailsScreen = ({navigation, route}) => {
  const {sessionName, BatchNumber} = route.params;
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  return (
    <View>
      <UserControl firstName={fName} lastName={lName} />

      <TextInput
        value={fName}
        placeholder="First Name"
        onChangeText={ct => {
          setFName(ct);
        }}
      />
      <TextInput
        value={lName}
        placeholder="Last Name"
        onChangeText={ct => {
          setLName(ct);
        }}
      />

      <Text>this is a details screen</Text>
      <Text>{sessionName}</Text>
      <Text>{BatchNumber}</Text>
      <Button
        title={'Navigate to yet another Details screen'}
        onPress={() => {
          navigation.navigate('Details');
        }}
      />

      <Button
        title={'Push to yet another Details screen'}
        onPress={() => {
          navigation.push('Details');
        }}
      />

      <Button
        title={'Push to yet another Home screen'}
        onPress={() => {
          navigation.push('Home');
        }}
      />

      <Button
        title={'Navigate to yet another Home screen'}
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </View>
  );
};

export default DetailsScreen;
