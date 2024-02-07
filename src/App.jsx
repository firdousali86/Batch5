import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';
import ApiHelper from './helpers/ApiHelper';
import {useEffect} from 'react';
import store from './store';
import {Provider} from 'react-redux';

const App = () => {
  useEffect(() => {
    // ApiHelper.setMyObject({city: 'karachi'});
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
