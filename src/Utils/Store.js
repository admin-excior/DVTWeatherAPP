import AsyncStorage from '@react-native-community/async-storage';

// Save location weather to storage
export const storeAsyncData = async (key, value) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, stringValue);
    return stringValue;
  } catch (err) {
    console.log(err);
  }
};

// Save location weather to storage
export const getAsyncData = async (key) => {
  try {
    const stringValue = await AsyncStorage.getItem(key);
    stringValue ? console.log('No data') : console.log('Got data');
    return stringValue;
  } catch (err) {
    console.log(err);
  }
};
