import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';
import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
PriceRange.propTypes = {
  sliderValue: PropTypes.number,
  setSliderValue: PropTypes.func,
};
PriceRange.defaultProps = {
  sliderValue: 0,
  setSliderValuedColor: () => {},
};

export default function PriceRange(props) {
  const {sliderValue, setSliderValue} = props;
  return (
    <View style={styles.filterItem}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Price range</Text>
      </View>
      <View style={styles.priceNumber}>
        <Text style={styles.number}>${sliderValue}</Text>
      </View>
      <Slider
        style={{height: 20}}
        minimumValue={0}
        maximumValue={100}
        step={1}
        minimumTrackTintColor="#EF3651"
        maximumTrackTintColor="#ABB4BD"
        thumbTintColor="#EF3651"
        value={sliderValue}
        onValueChange={value => {
          setSliderValue(value);
        }}
      />
    </View>
  );
}
