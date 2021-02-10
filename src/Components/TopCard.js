import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from 'react-native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'native-base';
import {rain, clear, cloudy} from '../Assets/Icons';
import ListHeader from '../Components/ListHeader';
import ListItem from '../Components/ListItem';
import MapItem from '../Components/MapItem';
export default function Index(props) {
  // console.log('props', props);
  const {
    backgroundImage,
    currentWeather,
    forecast,
    name,
    goto,
    likeLocation,
    latLon,
    backgroundColour,
  } = props;

  function renderItem({item}) {
    item.weekDay = new Date(item.dt * 1000).toLocaleString('en-us', {
      weekday: 'long',
    });

    /**
     * Set the forecast image, depending on the weather value.
     * If it's anything not in our list we default to cloudy. As it's closer to storms etc.
     */
    item.dayIcon =
      item.weather[0].main === 'Rain'
        ? rain
        : item.weather[0].main === 'Clouds'
        ? cloudy
        : item.weather[0].main === 'Clear'
        ? clear
        : cloudy;
    // console.log('item', item);
    // console.log('item.main', item.main);
    // console.log('item.weather[0]main', item.weather[0].main);
    // console.log('item.dayIcon', item.dayIcon);
    return <ListItem item={item} />;
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.imageBackground}>
        <IconMI
          style={styles.currentDayLargeIcon}
          name="exposure-zero"
          size={20}
          color="white"
        />
        <Text style={styles.currentDayLargeTemp}>
          {Math.round(currentWeather.main.temp)}
        </Text>
        <Text style={styles.currentDayLargeWeather}>
          {currentWeather.weather[0].main}
        </Text>
        <MapItem
          name={name}
          goto={goto}
          likeLocation={likeLocation}
          latLon={latLon}
        />
      </ImageBackground>
      <View style={{flex: 1, backgroundColor: backgroundColour}}>
        <SafeAreaView style={styles.safeAreaView}>
          <FlatList
            data={forecast}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt.toString()}
            ListHeaderComponent={ListHeader({currentWeather})}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#54717A',
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
  },
  currentDayLargeTemp: {
    paddingTop: 100,
    fontSize: 100,
    fontWeight: 'bold',
    color: 'white',
  },
  currentDayLargeWeather: {
    paddingTop: 10,
    fontSize: 50,
    color: 'white',
  },
  currentDayLargeIcon: {
    fontSize: 40,
    position: 'absolute',
    left: 250,
    top: 100,
  },
  safeAreaView: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    paddingTop: 40,
  },
  title: {
    fontSize: 32,
  },
  listHeaderIcon: {
    fontSize: 20,
    position: 'absolute',
    left: 90,
    top: 1,
  },
});
