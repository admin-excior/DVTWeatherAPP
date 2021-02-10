import React, {useState} from 'react';
import getWeather from '../../Utils/Weather';
import Loader from '../../Components/Loader';
import TopCard from '../../Components/TopCard';
import {forest_cloudy, forest_rainy, forest_sunny} from '../../Assets/Images';
import {getAsyncData, storeAsyncData} from '../../Utils/Store';

export default function Index(props) {
  console.log('props', props);
  const navigation = props.navigation;
  const weatherLatLon = getWeather();

  // Redirect to Route
  function goto(route) {
    navigation.navigate(route);
  }
  // Generate unique id for the location
  function uuidv4() {
    var d = new Date().getTime(); //Timestamp
    var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = Math.random() * 16; //random number between 0 and 16
        if (d > 0) {
          //Use timestamp until depleted
          r = (d + r) % 16 | 0;
          d = Math.floor(d / 16);
        } else {
          //Use microseconds since page-load if supported
          r = (d2 + r) % 16 | 0;
          d2 = Math.floor(d2 / 16);
        }
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
  }
  async function likeLocation(latLon) {
    let storedAsyncData;
    latLon.id = uuidv4();
    latLonArray = [];
    latLonArray.push(latLon);
    asyncLatLon = await getAsyncData('@latLon');
    console.log('asyncLatLon', asyncLatLon);
    if (asyncLatLon === null) {
      storedAsyncData = await storeAsyncData('@latLon', latLonArray);
      console.log('storedAsyncData', storedAsyncData);
    } else {
      latLon.id = uuidv4();
      let newArray;
      let asyncData = await getAsyncData('@latLon');
      let retrievedLatLon = JSON.parse(asyncData);
      newArray = retrievedLatLon;
      var index = retrievedLatLon.findIndex((x) => x.name == latLon.name);
      if (index === -1) {
        newArray.push(latLon);
        storedAsyncData = await storeAsyncData('@latLon', newArray);
      } else console.log('object already exists');
    }
  }
  //  Wait for the forecast to be ready, else show loading
  if (weatherLatLon.weather) {
    // Get all the relavent data that will be passed into child components
    const {name} = JSON.parse(weatherLatLon.weather);
    const {list} = JSON.parse(weatherLatLon.weather);
    const {latLon} = weatherLatLon;
    const currentWeather = list[0];
    let forecast = [];
    // console.log('latLon', latLon);
    // console.log('list', list);
    // console.log('currentWeather', currentWeather);
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

    const backgroundColour =
      currentWeather.weather[0].main === 'Rain'
        ? '#57575D'
        : currentWeather.weather[0].main === 'Clouds'
        ? '#54717A'
        : currentWeather.weather[0].main === 'Clear'
        ? '#47AB2F'
        : '#54717A';

    // console.log('weatherLatLon.weather', weatherLatLon.weather);
    return (
      <>
        <TopCard
          backgroundImage={backgroundImage}
          currentWeather={currentWeather}
          forecast={forecast}
          name={name}
          goto={goto}
          latLon={latLon}
          likeLocation={likeLocation}
          backgroundColour={backgroundColour}
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
