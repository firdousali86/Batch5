import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';
import ApiHelper from './helpers/ApiHelper';
import {useEffect} from 'react';
import store from './store';
import {Provider} from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  useEffect(() => {
    // ApiHelper.setMyObject({city: 'karachi'});
  }, []);

  return (
    <ErrorBoundary>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
