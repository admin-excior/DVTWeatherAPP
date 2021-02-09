import {useState, useEffect} from 'react';
navigator.geolocation = require('@react-native-community/geolocation');

export default function getLocation() {
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
