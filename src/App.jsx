import {NavigationContainer} from '@react-navigation/native';
import Navigation from './navigation';
import ApiHelper from './helpers/ApiHelper';
import {useEffect, useState} from 'react';
import {store, persistor} from './store';
import {Provider} from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary';
import {PersistGate} from 'redux-persist/integration/react';
import {DataHelper} from './helpers';

import * as Keychain from 'react-native-keychain';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ApiHelper.setMyObject({city: 'karachi'});
    if (store && !isLoading) {
      DataHelper.setStore(store);
    }
  }, [isLoading]);

  useEffect(() => {
    // Keychain.setInternetCredentials(
    //   'com.itc.batch5.secure',
    //   'firdousali',
    //   '123456',
    // )
    //   .then(success => {
    //     console.log(success);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        onBeforeLift={() => {
          console.log('store is loaded');

          setIsLoading(false);
        }}>
        <ErrorBoundary>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default App;
