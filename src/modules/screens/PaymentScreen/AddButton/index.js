import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {AppIcons} from '../../../../general/constants/AppResource';
import styles from './styles';
export default function AddButton(props) {
  const {setShowAddCard, bottom} = props;
  return (
    <TouchableOpacity
      style={[styles.add, {bottom: bottom}]}
      onPress={() => {
        setShowAddCard(true);
      }}>
      <Image source={AppIcons.add_inactive} />
    </TouchableOpacity>
  );
}
