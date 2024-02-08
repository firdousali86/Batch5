import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  HomeScreen,
  DetailsScreen,
  SignupScreen,
  LoginScreen,
  LifecyclePracScreen,
  UserProfileScreen,
  PropDrillingScreen,
  UseRefTestScreen,
  FetchScreen,
  ReduxScreen,
  CartScreen,
} from '../screen';

const Stack = createNativeStackNavigator();

const Navigation = props => {
  const navigation = useNavigation();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const renderMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="ReduxScreen"
          component={ReduxScreen}
          options={{
            headerRight: () => (
              <Button
                title={'Cart'}
                onPress={() => {
                  navigation.navigate('CartScreen');
                }}
              />
            ),
          }}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="FetchScreen" component={FetchScreen} />
        <Stack.Screen name="UseRefTestScreen" component={UseRefTestScreen} />
        <Stack.Screen name="PropDrilling" component={PropDrillingScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LifecyclePrac" component={LifecyclePracScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{
            sessionName: 'some initial value of session name',
            BatchNumber: 0,
          }}
        />
      </Stack.Group>
    );
  };

  const renderAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isLoggedIn ? renderMainStack() : renderAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
