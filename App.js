import React from 'react';
import Main from './src/Screens/Main';
import MapView from './src/Screens/MapView';
import getWeather from './src/Utils/Weather';
import Loader from './src/Components/Loader';
export default function App() {
  const weather = getWeather();
  if (weather) {
    // return <Main forecast={weather} />;
    return <MapView forecast={weather} />;
  } else return <Loader />;
}
