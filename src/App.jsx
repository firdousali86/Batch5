import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';
import ApiHelper from './helpers/ApiHelper';
import {useEffect} from 'react';

const App = () => {
  useEffect(() => {
    // ApiHelper.setMyObject({city: 'karachi'});
  }, []);

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
