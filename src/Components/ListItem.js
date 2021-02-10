import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import {Text, Col, Row} from 'native-base';

export default listHeader = ({item}) => (
  <View style={styles.item}>
    <Row>
      <Col style={styles.currentDayCol}>
        <Text style={styles.currentDayTemp}>{item.weekDay}</Text>
      </Col>
      <Col style={styles.currentDayCol}>
        <Image source={item.dayIcon} style={styles.image} />
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

const styles = StyleSheet.create({
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
  item: {
    paddingTop: 40,
  },
  listHeaderIcon: {
    fontSize: 20,
    position: 'absolute',
    left: 90,
    top: 1,
  },
  image: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});
