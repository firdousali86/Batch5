import {useState} from 'react';
import {View, Text, Button, TextInput, FlatList, Modal} from 'react-native';
import styles from './styles';
import UserControl from './UserControl';

const DetailsScreen = ({navigation, route}) => {
  const {sessionName, BatchNumber} = route.params;
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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

  const renderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            width: 300,
            height: 500,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'grey',
          }}>
          <View>
            <Text>Test Modal</Text>
            <Text>Sample text</Text>
          </View>
          <Button
            title={'Hide Modal'}
            onPress={() => {
              setModalVisible(false);
            }}
          />
        </View>
      </Modal>
    );
  };

  const renderFlatList = () => {
    return (
      <FlatList
        data={[
          {carName: 'Passo'},
          {carName: 'Vitz'},
          {carName: 'City'},
          {carName: 'Civic'},
        ]}
        renderItem={renderItem}
      />
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

      <Button
        title={'Show Modal'}
        onPress={() => {
          setModalVisible(true);
        }}
      />

      {renderFlatList()}
      {renderModal()}
    </View>
  );
};

export default DetailsScreen;
