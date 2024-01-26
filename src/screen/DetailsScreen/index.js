import {} from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const DetailsScreen = ({navigation, route}) => {
  const {sessionName, BatchNumber} = route.params;

  return (
    <View>
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
