import PropTypes from 'prop-types';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  setColorFocus,
  setColorIdFocus
} from '../../../../screens/ProductCardScreen/ProductSlice';
import styles from './styles';
ColorCell.propTypes = {
  item: PropTypes.object,
};
ColorCell.defaultProps = {
  item: null,
};

export default function ColorCell(props) {
  const {item} = props;
  const {colorIdFocus, isColorFocus} = useSelector(state => state.product);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={[
        styles.outterCircle,
        {
          borderColor:
            isColorFocus && item.id == colorIdFocus
              ? item.borderColor
              : 'transparent',
        },
      ]}
      onPress={() => {
        if (isColorFocus && item.id == colorIdFocus)
          dispatch(setColorFocus(false));
        else if (!isColorFocus && item.id == colorIdFocus)
          dispatch(setColorFocus(true));
        else if (!isColorFocus && item.id != colorIdFocus) {
          dispatch(setColorFocus(true));
          dispatch(setColorIdFocus(item.id));
        } else {
          dispatch(setColorIdFocus(item.id));
        }
      }}>
      <View
        style={[
          styles.innerCircle,
          {backgroundColor: item.backgroundColor},
        ]}></View>
    </TouchableOpacity>
  );
}
