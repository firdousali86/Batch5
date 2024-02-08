import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistanceHelper {
  getValue = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
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
      AsyncStorage.setItem(key, value);
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
