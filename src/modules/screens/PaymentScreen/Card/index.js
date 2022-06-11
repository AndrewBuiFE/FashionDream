import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppImages } from '../../../../general/constants/AppResource';
import styles from './styles';
Card.propTypes = {};
Card.defaultProps = {};
function Card(props) {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={{marginTop: 34}}>
        <Image source={AppImages.chip} />
      </View>
      <Text style={styles.number}>{item.cardNumber}</Text>
      <View style={styles.cardInfo}>
        <View style={styles.section}>
          <Text style={styles.title}>Card Holder Name</Text>
          <Text style={styles.text}>{item.holderName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Expiry Date</Text>
          <Text style={styles.text}>{item.exp}</Text>
        </View>
        <Image source={AppImages.card} />
      </View>
    </TouchableOpacity>
  );
}
export default Card;
