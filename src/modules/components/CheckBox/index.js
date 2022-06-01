import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppIcons } from '../../../general/constants/AppResource';
import styles from './styles';
export default function CheckBox(props) {
  const {isCheck, message, marginLeft, marginTop, marginBottom} = props;
  return (
    <View
      style={[
        styles.check,
        {
          marginLeft: marginLeft,
          marginTop: marginTop,
          marginBottom: marginBottom,
        },
      ]}>
      {isCheck ? (
        <TouchableOpacity>
          <Image source={AppIcons.checkbox_on} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image source={AppIcons.checkbox_inactive} />
        </TouchableOpacity>
      )}
      <Text style={styles.boxText}>{message}</Text>
    </View>
  );
}
