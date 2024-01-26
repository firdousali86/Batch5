import {} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import TestLayout from '../../components/TestLayout';

import styles from './styles';

const HomePageScreen = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <TestLayout />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            sessionName: 'React Native',
            BatchNumber: 5,
          });
        }}
        style={styles.button1}>
        <Text>Navigate Details Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Details');
        }}
        style={styles.button1}>
        <Text>Push Details Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePageScreen;
