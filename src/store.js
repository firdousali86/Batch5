import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import cartReducer from './features/cart/cartSlice';
import userSlice from './features/user/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/lib/persistStore';
import reducers from './features/reducers';
import sagas from './sagas';
import createSagaMiddleware from 'redux-saga';

import {createLogger} from 'redux-logger';

const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

let persistConfig = {key: 'root', storage: AsyncStorage};
let rootReducer = combineReducers(reducers);

let persistedReducer = persistReducer(persistConfig, rootReducer);

const logger = createLogger({
  predicate: () => isDebuggingInChrome,
  collapsed: true,
  duration: true,
  diff: true,
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger, sagaMiddleware),
});

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);
