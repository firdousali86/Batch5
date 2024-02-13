// import AsyncStorage from '@react-native-async-storage/async-storage';
import SInfo from 'react-native-sensitive-info';

class PersistanceHelper {
  getValue = async key => {
    try {
      // const value = await AsyncStorage.getItem(key);
      const value = await SInfo.getItem(key, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
      });

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
      SInfo.setItem(key, value, {
        sharedPreferencesName: 'mySharedPrefs',
        keychainService: 'myKeychain',
      });
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  getObject = async key => {
    const stringifiedObject = await this.getValue(key);
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
