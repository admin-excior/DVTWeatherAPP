import React, {useEffect, useReducer, useState} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Image, TouchableOpacity, FlatList} from 'react-native';
import {
  Container,
  Content,
  Text,
  Thumbnail,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Header,
  Item,
  Input,
  Icon,
  Button,
} from 'native-base';
export default function Index(props) {
  const {backgroundImage} = props;
  return (
    <Card>
      <CardItem header bordered>
        <Text>NativeBase</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>
            NativeBase is a free and open source framework that enable
            developers to build high-quality mobile apps using React Native iOS
            and Android apps with a fusion of ES6.
          </Text>
        </Body>
      </CardItem>
      <CardItem footer bordered>
        <Text>GeekyAnts</Text>
      </CardItem>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 90,
  },
  imageBackground: {
    width: '100%',
    height: '50%',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.4,
    backgroundColor: 'black',
  },
});
