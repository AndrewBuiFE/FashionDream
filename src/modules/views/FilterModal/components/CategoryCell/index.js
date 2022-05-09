import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
CategoryCell.propTypes = {
  colorOnFocus: PropTypes.string,
  setColorFocus: PropTypes.func,
};
CategoryCell.defaultProps = {
  colorOnFocus: '',
  setColorFocus: () => {},
};

export default function CategoryCell(props) {
  const {item, sizeData, setSizeData} = props;
  const [sizeOnFocus, setSizeFocus] = useState(false);
  return (
    <TouchableOpacity
      style={[
        styles.categoryContainer,
        {
          backgroundColor: sizeOnFocus ? '#EF3651' : 'black',
          borderColor: sizeOnFocus ? '#EF3651' : '#ABB4BD',
        },
      ]}
      onPress={() => {
        let tempData = sizeData;
        let cell = tempData.filter(obj => obj.id == item.id);
        cell.onFocus = !cell.onFocus;
        setSizeData(tempData);
        setSizeFocus(!sizeOnFocus);
      }}>
      <Text
        style={[
          styles.sizeText,
          {
            color: sizeOnFocus ? '#2A2C36' : '#F7F7F7',
          },
        ]}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}
