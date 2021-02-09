import AsyncStorage from '@react-native-community/async-storage';

// Save location weather to storage
export const storeWeatherData = async (value) => {
  try {
    const stringValue = JSON.stringify(value);
    await AsyncStorage.setItem('weatherData', stringValue);
    return stringValue;
  } catch (err) {
    console.log(err);
  }
};

// Save location weather to storage
export const getWeatherData = async () => {
  try {
    const stringValue = await AsyncStorage.getItem('@weatherData');
    stringValue ? console.log('No data') : console.log('Got data');
    return stringValue;
  } catch (err) {
    console.log(err);
  }
};
