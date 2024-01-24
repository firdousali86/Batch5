import {Text, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import UserProfileComponentF from './components/UserProfileComponentF';
import UserProfileComponentC from './components/UserProfileComponentC';
import {ColorChangeDemoC, ColorChangeDemoF} from './components/ColorChangeDemo';
import TestFlexbox from './components/TestFlexbox';

const App = () => {
  const [parentFirstName, setParentFirstName] = useState('');

  return (
    <View style={{marginTop: 20, backgroundColor: 'pink', flex: 1}}>
      <TestFlexbox />
    </View>
  );
};

export default App;
