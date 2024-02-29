import { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TestLayout from '../../components/TestLayout';
import styles from './styles';
import { AnalyticsHelper } from '../../helpers';
import auth from '@react-native-firebase/auth';


const HomePageScreen = props => {
  const { navigation, route } = props;

  const onFirebaseSignedOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  useEffect(() => {
    if (route.params) {
      console.log(route.params);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <TestLayout />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FirestoreUsersScreen');
        }}
        style={styles.button1}>
        <Text>Navigate Firebase Users</Text>
      </TouchableOpacity>
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
      <TouchableOpacity
        // onPress={() => {
        //   navigation.push('MapScreen');
        //   AnalyticsHelper.mapScreenEvent()
        // }}
        onPress={() => onFirebaseSignedOut()}
        style={styles.button1}>
        <Text>Sign out</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LifecyclePrac');
        }}>
        <Text>LifecyclePrac</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomePageScreen;
