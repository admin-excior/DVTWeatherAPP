import React, {useState} from 'react';
import getWeather from '../../Utils/Weather';
import Loader from '../../Components/Loader';
import TopCard from '../../Components/TopCard';
import {forest_cloudy, forest_rainy, forest_sunny} from '../../Assets/Images';

export default function Index() {
  const weatherLatLon = getWeather();
  if (weatherLatLon.weather) {
    const {name} = JSON.parse(weatherLatLon.weather);
    const {list} = JSON.parse(weatherLatLon.weather);
    const currentWeather = list[0];
    let forecast = [];
    console.log('name', name);
    console.log('list', list);
    console.log('currentWeather', currentWeather);
    for (var i = 0; i < list.length; i += 8) {
      forecast.push(list[i]);
    }
    forecast.shift();
    const backgroundImage =
      currentWeather.weather[0].main === 'Rain'
        ? forest_rainy
        : currentWeather.weather[0].main === 'Clouds'
        ? forest_cloudy
        : currentWeather.weather[0].main === 'Clear'
        ? forest_sunny
        : forest_cloudy;
    console.log('weatherLatLon.weather', weatherLatLon.weather);
    return (
      <>
        <TopCard
          backgroundImage={backgroundImage}
          currentWeather={currentWeather}
          forecast={forecast}
          name={name}
        />
      </>
    );
  } else {
    return <Loader />;
  }
}

//Get the forecast data & convert it to JSON format
// const {list} = JSON.parse(props.forecast);
// const {name} = JSON.parse(props.forecast);
// const [currentWeather] = useState(list[0]);
// const [weekWeather, setWeekWeather] = useState([]);
// const [forecast, setForecast] = useState([]);
// let weekForecast = list.shift();
// setForecast(weekForecast);
// console.log('name', name);
// console.log('props', props);
// console.log('list', list);
// console.log('name', name);
// let forecast = [];
// for (var i = 0; i < list.length; i += 8) {
//   // console.log(`list[${i}]`, list[i]);
//   forecast.push(list[i]);
// }
// forecast.shift();
// setWeekWeather(forecast);
//  Check the main weather for the day. If it's not rain, clouds or clear we default is to cloudy
// console.log('main weather', currentWeather);
// const backgroundImage =
//   currentWeather.weather[0].main === 'Rain'
//     ? forest_rainy
//     : currentWeather.weather[0].main === 'Clouds'
//     ? forest_cloudy
//     : currentWeather.weather[0].main === 'Clear'
//     ? forest_sunny
//     : forest_cloudy;
