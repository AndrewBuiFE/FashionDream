import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSizeFocus,
  setSizeIdFocus
} from '../../../../screens/ProductCardScreen/ProductSlice';
import styles from './styles';
CategoryCell.propTypes = {
  item: PropTypes.object,
};
CategoryCell.defaultProps = {
  item: null,
};

export default function CategoryCell(props) {
  const {item} = props;
  const {sizeIdFocus, isSizeFocus} = useSelector(state => state.product);
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={[
        styles.categoryContainer,
        {
          backgroundColor:
            isSizeFocus && item.id == sizeIdFocus ? '#EF3651' : 'black',
          borderColor:
            isSizeFocus && item.id == sizeIdFocus ? '#EF3651' : '#ABB4BD',
        },
      ]}
      onPress={() => {
        if (isSizeFocus && item.id == sizeIdFocus)
          dispatch(setSizeFocus(false));
        else if (!isSizeFocus && item.id == sizeIdFocus)
          dispatch(setSizeFocus(true));
        else if (!isSizeFocus && item.id != sizeIdFocus) {
          dispatch(setSizeFocus(true));
          dispatch(setSizeIdFocus(item.id));
        } else {
          dispatch(setSizeIdFocus(item.id));
        }
      }}>
      <Text
        style={[
          styles.sizeText,
          {
            color:
              isSizeFocus && item.id == sizeIdFocus ? '#2A2C36' : '#F7F7F7',
          },
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}
