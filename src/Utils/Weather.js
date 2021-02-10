import {useState, useEffect} from 'react';
import axios from 'axios';
import {getAsyncData, storeAsyncData} from './Store';
import {getLocation} from './Location';

export default function getWeather() {
  const API_KEY = '8cd28b8dcf34fa77181e6d3bbafa4842';
  const [weather, setWeather] = useState(null);
  const latLon = getLocation();
  // console.log('latLon', latLon);
  useEffect(() => {
    if (latLon) {
      fetchAPI(...latLon);
    }
  }, [latLon]);

  const fetchAPI = async (lat, lon) => {
    try {
      const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;
      const res = await axios.get(URL);
      const data = await storeAsyncData('@weatherData', filterData(res.data));
      // console.log('data', data);
      setWeather(data);
    } catch (err) {
      console.log('Axios failed', err);
      // If we encounter an error - Network, we use data that's stored on the phone's memory
      const data = await getAsyncData('@weatherData');
      setWeather(data);
    }
  };

  return {weather, latLon};
}

const filterData = (rawData) => {
  return {
    id: rawData.city.id,
    name: rawData.city.name,
    country: rawData.city.country,
    timezone: rawData.city.timezone,
    coord: {
      lat: rawData.city.coord.lat,
      lon: rawData.city.coord.lon,
    },
    list: rawData.list,
  };
};
