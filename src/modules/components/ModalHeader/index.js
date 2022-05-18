import React from 'react';
const {View} = require('react-native');
export default function Modalheader(props) {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        borderRadius: 6,
        height: 5,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
      }}>
      <View
        style={{
          backgroundColor: '#ABB4BD',
          opacity: 0.2,
          borderRadius: 6,
          height: 5,
          width: 90,
        }}></View>
    </View>
  );
}
