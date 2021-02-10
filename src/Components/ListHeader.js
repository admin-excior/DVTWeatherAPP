import React from 'react';
import {StyleSheet} from 'react-native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import {Text, Col, Row} from 'native-base';

export default listHeader = ({currentWeather}) => (
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

const styles = StyleSheet.create({
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
  listHeaderIcon: {
    fontSize: 20,
    position: 'absolute',
    left: 90,
    top: 1,
  },
});
