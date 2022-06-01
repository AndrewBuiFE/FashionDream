import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import CategoryCell from '../CategoryCell/index';
import styles from './styles';
CategoryFilter.propTypes = {
  colorOnFocus: PropTypes.string,
  setColorFocus: PropTypes.func,
};
CategoryFilter.defaultProps = {
  colorOnFocus: '',
  setColorFocus: () => {},
};
let CATEGORIES = [
  {
    id: 1,
    title: 'All',
  },
  {
    id: 2,
    title: 'Women',
  },
  {
    id: 3,
    title: 'Men',
  },
  {
    id: 4,
    title: 'Boys',
  },
  {
    id: 5,
    title: 'Girls',
  },
];

export default function CategoryFilter(props) {
  const [sizeData, setSizeData] = useState(CATEGORIES);
  const [sizeOnFocus, setSizeFocus] = useState('');
  const renderItem = ({item}) => {
    return (
      <CategoryCell
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
        <Text style={styles.title}>Category</Text>
      </View>
      <View style={styles.filterContainer}>
        <FlatList
          data={sizeData}
          renderItem={renderItem}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          style={{height: 92,}}
          contentContainerStyle={{justifyContent: 'space-between'}}
          numColumns={3}
          columnWrapperStyle={'wrap'}
        />
      </View>
    </View>
  );
}
