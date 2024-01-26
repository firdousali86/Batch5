import {useState} from 'react';
import {View, Text, Button, TextInput, FlatList} from 'react-native';
import styles from './styles';
import UserControl from './UserControl';

const DetailsScreen = ({navigation, route}) => {
  const {sessionName, BatchNumber} = route.params;
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: 'blue',
          margin: 5,
          height: 70,
          borderRadius: 8,
        }}>
        <Text>{item.carName}</Text>
      </View>
    );
  };

  return (
    <View>
      <UserControl
        firstName={fName}
        lastName={lName}
        changePropPassing={(newFirstName, newLastName) => {
          setFName(newFirstName);
          setLName(newLastName);
        }}
      />

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

      <Button
        title={'Pass data back'}
        onPress={() => {
          navigation.navigate({
            name: 'Home',
            params: {city: 'London', Country: 'UK'},
            merge: true,
          });
        }}
      />

      <FlatList
        data={[
          {carName: 'Passo'},
          {carName: 'Vitz'},
          {carName: 'City'},
          {carName: 'Civic'},
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default DetailsScreen;
