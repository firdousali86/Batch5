import {Text, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import UserProfileComponentF from './components/UserProfileComponentF';
import UserProfileComponentC from './components/UserProfileComponentC';
import {ColorChangeDemoC, ColorChangeDemoF} from './components/ColorChangeDemo';

const App = () => {
  const [parentFirstName, setParentFirstName] = useState('');

  return (
    <View style={{marginTop: 20}}>
      <ColorChangeDemoF backgroundColor={'green'} />
      <ColorChangeDemoC backgroundColor={'red'} />
    </View>
  );
};

export default App;
