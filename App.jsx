import {Text, View, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import UserProfileComponentF from './components/UserProfileComponentF';

const App = () => {
  const [parentFirstName, setParentFirstName] = useState('');

  return (
    <View style={{marginTop: 20}}>
      <UserProfileComponentF
        firstName={parentFirstName}
        lastName={'Ali'}
        cell={'123456789'}
        city={'Karachi'}
        country={'Pakistan'}
        email={'firdous@firdous.com'}
      />

      <TouchableOpacity
        onPress={() => {
          setParentFirstName('Firdous' + Date());
        }}>
        <Text>Button in parent control</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
