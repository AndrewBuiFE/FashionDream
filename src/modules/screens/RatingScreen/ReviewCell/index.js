import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppIcons } from '../../../../general/constants/AppResource';
import styles from './styles';
ReviewCell.propTypes = {};
ReviewCell.defaultProps = {};
let promoCodeValue = '';
function ReviewCell(props) {
  return (
    <View style = {styles.reviewCell}>
      <Text style = {styles.name}>Bui Hoang</Text>
      <View style = {styles.secondRow}> 
        <View>{/* star */}</View>
        <View>
          <Text style = {styles.text}>June 5, 2019</Text>
        </View>
      </View>
      <View style = {styles.paragraph}>
        <Text style = {styles.paraText}>
          The dress is great! Very classy and comfortable. It fit perfectly! I'm
          5'7" and 130 pounds. I am a 34B chest. This dress would be too long
          for those who are shorter but could be hemmed. I wouldn't recommend it
          for those big chested as I am smaller chested and it fit me perfectly.
          The underarms were not too wide and the dress was made well.
        </Text>
      </View>
      <TouchableOpacity style = {styles.helpful}>
        <Text style = {styles.text}>Helpful</Text>
        <Image source={AppIcons.helpful}/>
      </TouchableOpacity>
    </View>
  );
}
export default ReviewCell;
