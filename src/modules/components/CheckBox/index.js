import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppIcons } from '../../../general/constants/AppResource';
import styles from './styles';
export default function CheckBox(props) {
  const {isCheck, message, marginLeft, marginTop, marginBottom} = props;
  const [check, setCheck] = useState(isCheck);
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
      <TouchableOpacity
        onPress={() => {
          setCheck(!check);
        }}>
        <Image
          source={check ? AppIcons.checkbox_on : AppIcons.checkbox_inactive}
        />
      </TouchableOpacity>

      <Text style={styles.boxText}>{message}</Text>
    </View>
  );
}
