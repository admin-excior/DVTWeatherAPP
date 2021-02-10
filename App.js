import React from 'react';
import Main from './src/Screens/Main';
import MapView from './src/Screens/MapView';
import getWeather from './src/Utils/Weather';
import Loader from './src/Components/Loader';
export default function App() {
  const weatherLatLon = getWeather();
  if (weatherLatLon.weather) {
    console.log('weather', weatherLatLon.weather);
    // return <></>;
    return <Main forecast={weatherLatLon.weather} />;
    // return <MapView latLon={weather.latLon} />;
  } else return <Loader />;
}
