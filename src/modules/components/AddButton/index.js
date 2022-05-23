import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { AppIcons } from '../../../general/constants/AppResource';
import styles from './styles';
export default function AddButton(props) {
  const {setShowAdd, bottom} = props;
  return (
    <TouchableOpacity
      style={[styles.add, {bottom: bottom}]}
      onPress={() => {
        setShowAdd(true);
      }}>
      <Image source={AppIcons.add_inactive} />
    </TouchableOpacity>
  );
}
