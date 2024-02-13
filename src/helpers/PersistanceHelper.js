// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SInfo from 'react-native-sensitive-info';
import {MMKV} from 'react-native-mmkv';

class PersistanceHelper {
  storage = undefined;

  constructor() {
    this.storage = new MMKV({
      id: `user-1234-storage`,
      // path: `/storage`,
    });
    // this.storage.recrypt('thisismyprivatekey');
  }

  getValue = key => {
    try {
      // const value = await AsyncStorage.getItem(key);
      // const value = await SInfo.getItem(key, {
      //   sharedPreferencesName: 'mySharedPrefs',
      //   keychainService: 'myKeychain',
      // });

      const value = this.storage.getString(key);

      if (value !== null) {
        // value previously stored
        return value;
      }
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  setValue = (key, value) => {
    try {
      // AsyncStorage.setItem(key, value);
      // SInfo.setItem(key, value, {
      //   sharedPreferencesName: 'mySharedPrefs',
      //   keychainService: 'myKeychain',
      // });
      this.storage.set(key, value);
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  getObject = key => {
    const stringifiedObject = this.getValue(key);
    console.log(stringifiedObject);
    console.log('STRINGIFIED ^');
    return JSON.parse(stringifiedObject);
  };

  setObject = (key, valueObject) => {
    const stringifiedObject = JSON.stringify(valueObject);

    this.setValue(key, stringifiedObject);
  };
}

export default new PersistanceHelper();
