import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { SIZES } from '../../../../../data';
import SizeCell from '../SizeCell/index';
import styles from './styles';
SizeFilter.propTypes = {
  colorOnFocus: PropTypes.string,
  setColorFocus: PropTypes.func,
};
SizeFilter.defaultProps = {
  colorOnFocus: '',
  setColorFocus: () => {},
};

export default function SizeFilter(props) {
  console.log('Size filter');
  const [sizeData, setSizeData] = useState(SIZES);
  const [sizeOnFocus, setSizeFocus] = useState('');
  const renderItem = ({item}) => {
    return (
      <SizeCell
        item={item}
        sizeOnFocus={sizeOnFocus}
        setSizeFocus={setSizeFocus}
        sizeData={sizeData}
        setSizeData={setSizeData}
      />
    );
  };
  return (
    <View style={styles.filterItem}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sizes</Text>
      </View>
      <View style={styles.sizeContainer}>
        <FlatList
          data={sizeData}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{height: 40}}
        />
      </View>
    </View>
  );
}
