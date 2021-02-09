import React, {Component} from 'react';
import {View, Text, Modal, StyleSheet, ActivityIndicator} from 'react-native';
import colours from '../Styles/Colour';
import {PropTypes} from 'prop-types';

export default class Loader extends Component {
  render() {
    return (
      <Modal transparent={true}>
        <View style={styles.loaderContainer}>
          <View style={styles.loaderView}>
            <ActivityIndicator size="large" color={colours.bluegrey_700} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: '#00000020',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderView: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '20%',
    alignItems: 'center',
  },
});
