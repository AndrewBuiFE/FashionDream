import React, {useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import _ from "lodash";
const DemoScreen = () => {
  var object = { 'a': [{ 'b': { 'c': 3 } }] };
  _.set(object, 'a[0].b.c', 4);
  console.log(object.a);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'red'}}>Click me!</Text>
    </View>
  );
};
export default DemoScreen;
