import {Text, View} from 'react-native';
import {MyFirstClassComponent} from './components/MyFirstClassComponent';
import MTFC, {
  MyFirstFunctionalComponent,
  MySecondFunctionalComponent,
} from './components/MyFirstFunctionalComponent';
import UserProfileComponentF from './components/UserProfileComponentF';

const App = () => {
  return (
    <View style={{marginTop: 20}}>
      <UserProfileComponentF
        firstName={'Firdous'}
        lastName={'Ali'}
        cell={'123456789'}
        city={'Karachi'}
        country={'Pakistan'}
        email={'firdous@firdous.com'}
      />
    </View>
  );
};

export default App;
