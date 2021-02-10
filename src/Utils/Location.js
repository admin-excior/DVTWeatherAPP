import {useState, useEffect} from 'react';
import {getAsyncData} from './Store';

navigator.geolocation = require('@react-native-community/geolocation');

function getLocation() {
  const [latitudeLongitude, setlatitudeLongitude] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setlatitudeLongitude([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      (err) => {
        console.log(err);
      },
    );
  }, []);

  return latitudeLongitude;
}

async function getAsyncLocations() {
  let asyncData = await getAsyncData('@latLon');
  let retrievedLatLon = JSON.parse(asyncData);
  console.log('retrievedLatLon', retrievedLatLon);
  return retrievedLatLon;
}

module.exports = {
  getLocation,
  getAsyncLocations,
};
