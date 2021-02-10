import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  SafeAreaView,
  FlatList,
} from 'react-native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import {Text, Col, Row} from 'native-base';

const Item = ({item}) => (
  <View style={styles.item}>
    <Row>
      <Col style={styles.currentDayCol}>
        <Text style={styles.currentDayTemp}>{item.weekDay}</Text>
      </Col>
      <Col style={styles.currentDayCol}>
        <Text style={styles.currentDayText}>current</Text>
      </Col>
      <Col style={styles.currentDayCol}>
        <IconMI
          style={styles.listHeaderIcon}
          name="exposure-zero"
          size={20}
          color="white"
        />
        <Text style={styles.currentDayTemp}>
          {Math.round(item.main.temp_max)}
        </Text>
      </Col>
    </Row>
  </View>
);
export default function Index(props) {
  const {backgroundImage, currentWeather, forecast} = props;
  // console.log('forecast', forecast);
  function renderItem({item}) {
    item.weekDay = new Date(item.dt * 1000).toLocaleString('en-us', {
      weekday: 'long',
    });
    console.log('weekDay', item.weekDay);
    return <Item item={item} />;
  }
  const listHeader = () => (
    <Row
      style={{
        borderBottomColor: 'white',
        borderBottomWidth: 3,
      }}>
      <Col style={styles.currentDayCol}>
        <IconMI
          style={styles.listHeaderIcon}
          name="exposure-zero"
          size={20}
          color="white"
        />
        <Text style={styles.currentDayTemp}>
          {Math.round(currentWeather.main.temp_min)}
        </Text>
        <Text style={styles.currentDayText}>min</Text>
      </Col>
      <Col style={styles.currentDayCol}>
        <IconMI
          style={styles.listHeaderIcon}
          name="exposure-zero"
          size={20}
          color="white"
        />
        <Text style={styles.currentDayTemp}>
          {Math.round(currentWeather.main.temp)}
        </Text>
        <Text style={styles.currentDayText}>current</Text>
      </Col>
      <Col style={styles.currentDayCol}>
        <IconMI
          style={styles.listHeaderIcon}
          name="exposure-zero"
          size={20}
          color="white"
        />
        <Text style={styles.currentDayTemp}>
          {Math.round(currentWeather.main.temp_max)}
        </Text>
        <Text style={styles.currentDayText}>max</Text>
      </Col>
    </Row>
  );
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
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <SafeAreaView style={styles.safeAreaView}>
          <FlatList
            data={forecast}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt.toString()}
            ListHeaderComponent={listHeader}
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
  currentDayText: {
    color: 'white',
    paddingLeft: 10,
    alignItems: 'center',
    fontSize: 20,
  },
  currentDayTemp: {
    color: 'white',
    paddingLeft: 10,
    alignItems: 'center',
    fontSize: 25,
  },
  currentDayCol: {
    alignContent: 'center',
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
