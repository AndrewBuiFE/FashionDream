import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
ColorCell.propTypes = {
  colorOnFocus: PropTypes.string,
  setColorFocus: PropTypes.func,
};
ColorCell.defaultProps = {
  colorOnFocus: '',
  setColorFocus: () => {},
};

export default function ColorCell(props) {
  const {item, colorData, setColorData, callBackData} = props;
  const [colorFocus, setColorFocus] = useState(false);
  return (
    <TouchableOpacity
      style={[
        styles.outterCircle,
        {borderColor: colorFocus ? item.borderColor : 'transparent'},
      ]}
      onPress={() => {
        let tempData = colorData;
        let cell = tempData.filter(obj => obj.id == item.id);
        console.log(cell);
        cell[0].onFocus = !cell[0].onFocus;
        console.log('After: ', cell);
        setColorData(tempData);
        setColorFocus(!colorFocus);
        callBackData(tempData);
      }}>
      <View
        style={[
          styles.innerCircle,
          {backgroundColor: item.backgroundColor},
        ]}></View>
    </TouchableOpacity>
  );
}