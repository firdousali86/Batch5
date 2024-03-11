import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
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
  ReduxClassScreen,
  TestSagaScreen,
  TestRTKQuery,
  MapScreen,
  TestSSLPinning,
  TestHOCScreen,
} from '../screen';
import ReactTestScreen from '../screen/ReactTestScreen';
import ReactTestScreen2 from '../screen/ReactTestScreen2';
import {clearCart} from '../features/cart/cartSlice';
import {addSslPinningErrorListener} from 'react-native-ssl-public-key-pinning';

const Stack = createNativeStackNavigator();

const Navigation = props => {
  useEffect(() => {
    const subscription = addSslPinningErrorListener(error => {
      // Triggered when an SSL pinning error occurs due to pin mismatch
      console.log(error.serverHostname);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [isLoggedIn, setIsLoggedIn] = useState(
    user.data?.accessToken ? true : false,
  );

  useEffect(() => {
    setIsLoggedIn(user.data?.accessToken ? true : false);
  }, [user]);

  const renderMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="ReactTestScreen" component={ReactTestScreen} />
        <Stack.Screen name="ReactTestScreen2" component={ReactTestScreen2} />
        <Stack.Screen name="TestSagaScreen" component={TestSagaScreen} />
        <Stack.Screen name="UseRefTestScreen" component={UseRefTestScreen} />
        <Stack.Screen name="TestHOCScreen" component={TestHOCScreen} />
        <Stack.Screen name="TestSSLPinning" component={TestSSLPinning} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="TestRTKQuery" component={TestRTKQuery} />
        <Stack.Screen
          name="ReduxClassScreen"
          component={ReduxClassScreen}
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
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{
            headerRight: () => (
              <Button
                title={'Clear Cart'}
                onPress={() => {
                  dispatch(clearCart());
                }}
              />
            ),
          }}
        />
        <Stack.Screen name="FetchScreen" component={FetchScreen} />

        <Stack.Screen name="PropDrilling" component={PropDrillingScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
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
      {true ? renderMainStack() : renderAuthStack()}
    </Stack.Navigator>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
