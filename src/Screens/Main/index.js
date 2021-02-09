import React, {useState} from 'react';

import TopCard from '../../Components/TopCard';
import {forest_cloudy} from '../../Assets/Images';
import {forest_rainy} from '../../Assets/Images';
import {forest_sunny} from '../../Assets/Images';

export default function Index(props) {
  //Get the forecast data & convert it to JSON format
  const {list} = JSON.parse(props.forecast);
  const [currentWeather] = useState(list[0]);
  // const [weekWeather, setWeekWeather] = useState([]);
  // const [forecast, setForecast] = useState([]);
  // let weekForecast = list.shift();
  // setForecast(weekForecast);
  // console.log('name', name);
  // console.log('currentWeather', currentWeather);
  let forecast = [];
  for (var i = 0; i < list.length; i += 8) {
    console.log(`list[${i}]`, list[i]);
    forecast.push(list[i]);
  }
  forecast.shift();
  // setWeekWeather(forecast);
  //  Check the main weather for the day. If it's not rain, clouds or clear we default is to sunny
  // console.log('main weather', currentWeather);
  const backgroundImage =
    currentWeather.weather[0].main === 'Rain'
      ? forest_rainy
      : currentWeather.weather[0].main === 'Clouds'
      ? forest_cloudy
      : currentWeather.weather[0].main === 'Clear'
      ? forest_sunny
      : forest_sunny;

  return (
    <>
      <TopCard
        backgroundImage={backgroundImage}
        currentWeather={currentWeather}
        forecast={forecast}
      />
    </>
  );
}