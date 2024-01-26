import {Text, View, TouchableOpacity, Button} from 'react-native';
import {useState} from 'react';
import UserProfileComponentF from './src/components/UserProfileComponentF';
import UserProfileComponentC from './src/components/UserProfileComponentC';
import {
  ColorChangeDemoC,
  ColorChangeDemoF,
} from './src/components/ColorChangeDemo';
import TestFlexbox from './src/components/TestFlexbox';
import TestLayout from './src/components/TestLayout';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomePageScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [parentFirstName, setParentFirstName] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePageScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{
            sessionName: 'some initial value of session name',
            BatchNumber: 0,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
