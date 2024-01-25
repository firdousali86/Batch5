import {Text, View, TouchableOpacity, Button} from 'react-native';
import {useState} from 'react';
import UserProfileComponentF from './components/UserProfileComponentF';
import UserProfileComponentC from './components/UserProfileComponentC';
import {ColorChangeDemoC, ColorChangeDemoF} from './components/ColorChangeDemo';
import TestFlexbox from './components/TestFlexbox';
import TestLayout from './components/TestLayout';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomePageScreen = props => {
  const {navigation} = props;

  return (
    <View style={{backgroundColor: 'pink', flex: 1}}>
      <TestLayout />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}
        style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Navigate Details Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.push('Details');
        }}
        style={{height: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Push Details Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    <View>
      <Text>this is a details screen</Text>
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

const App = () => {
  const [parentFirstName, setParentFirstName] = useState('');

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePageScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
