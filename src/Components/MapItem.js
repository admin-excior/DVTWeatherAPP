import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import IconFO from 'react-native-vector-icons/FontAwesome';
import {Text, Col, Row} from 'native-base';

export default listHeader = ({name, goto}) => (
  <Row>
    <Col style={styles.currentDayCol}>
      <IconFO
        style={styles.listHeaderIcon}
        name="map-marker"
        color="red"
        onPress={() => goto('MapView')}
      />
    </Col>
    <Col style={styles.currentDayCol}>
      <Text style={styles.currentDayTemp}>{name}</Text>
    </Col>
    <Col style={styles.currentDayCol}>
      <IconFO style={styles.listHeaderIcon} name="thumbs-o-up" color="white" />
    </Col>
  </Row>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    fontSize: 20,
    bottom: 5,
  },
  currentDayCol: {
    alignContent: 'center',
    alignItems: 'center',
  },
  item: {
    paddingTop: 40,
  },
  listHeaderIcon: {
    fontSize: 40,
    position: 'absolute',
    bottom: 5,
  },
  image: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  currentDayTemp: {
    color: 'white',
    fontSize: 20,
    bottom: 5,
  },
});
