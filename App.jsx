import {Text, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import UserProfileComponentF from './components/UserProfileComponentF';
import UserProfileComponentC from './components/UserProfileComponentC';
import {ColorChangeDemoC, ColorChangeDemoF} from './components/ColorChangeDemo';
import TestFlexbox from './components/TestFlexbox';
import TestLayout from './components/TestLayout';

import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const [parentFirstName, setParentFirstName] = useState('');

  return (
    <NavigationContainer>
      <View style={{backgroundColor: 'pink', flex: 1}}>
        <TestLayout />
      </View>
    </NavigationContainer>
  );
};

export default App;
