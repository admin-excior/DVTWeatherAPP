import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Main from './src/Screens/Main';
import MapView from './src/Screens/MapView';
import getWeather from './src/Utils/Weather';
import Loader from './src/Components/Loader';

const RootStack = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        headerShown: false,
      },
    },
    MapView: {screen: MapView},
  },
  {
    initialRouteName: 'Main',
  },
);

const App = createAppContainer(RootStack);
export default App;

// export default function App() {
//   const weatherLatLon = getWeather();
//   if (weatherLatLon.weather) {
//     // console.log('weather', weatherLatLon.weather);
//     // return <></>;
//     return <RootStack forecast={weatherLatLon.weather} />;
//     // return <MapView latLon={weather.latLon} />;
//   } else return <Loader />;
// }
