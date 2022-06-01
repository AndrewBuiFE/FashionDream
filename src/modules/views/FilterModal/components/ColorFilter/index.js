import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import ColorCell from '../ColorCell/index';
import styles from './styles';
ColorFilter.propTypes = {
  colorOnFocus: PropTypes.string,
  setColorFocus: PropTypes.func,
};
ColorFilter.defaultProps = {
  colorOnFocus: '',
  setColorFocus: () => {},
};
let COLORS = [
  {
    id: 1,
    borderColor: '#ABB4BD',
    backgroundColor: '#020202',
    onFocus: false,
  },
  {
    id: 2,
    borderColor: '#ABB4BD',
    backgroundColor: '#F7F7F7',
    onFocus: false,
  },
  {
    id: 3,
    borderColor: '#ABB4BD',
    backgroundColor: '#F48117',
    onFocus: false,
  },
  {
    id: 4,
    borderColor: '#ABB4BD',
    backgroundColor: '#BEA9A9',
    onFocus: false,
  },
  {
    id: 5,
    borderColor: '#ABB4BD',
    backgroundColor: '#91BA4F',
    onFocus: false,
  },
  {
    id: 6,
    borderColor: '#ABB4BD',
    backgroundColor: '#2CB1B1',
    onFocus: false,
  },
];

export default function ColorFilter(props) {
  console.log('Color filter');
  const [colorData, setColorData] = useState(COLORS);
  const [colorOnFocus, setColorFocus] = useState('');
  console.log(colorData);
  const renderItem = ({item}) => {
    return (
      <ColorCell
        item={item}
        colorOnFocus={colorOnFocus}
        setColorFocus={setColorFocus}
        colorData={colorData}
        setColorData={setColorData}
        callBackData={data => {
          // console.log(data);
        }}
      />
    );
  };
  return (
    <View style={styles.filterItem}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Colors</Text>
      </View>
      <View style={styles.colorContainer}>
        <FlatList
          data={colorData}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height: 44}}
        />
      </View>
    </View>
  );
}
