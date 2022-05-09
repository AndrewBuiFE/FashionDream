import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
PromoCell.propTypes = {};
PromoCell.defaultProps = {};

function PromoCell(props) {
  const {item, getPromoCode, onModalHidden} = props;
  return (
    <TouchableOpacity style={[styles.promoContainer]}>
      <View style={styles.imageSection}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.promoContent}>
        <Text style={styles.promoTitle}>{item.promoTitle}</Text>
        <Text style={styles.promoText}>{item.promoCode}</Text>
      </View>
      <View style={{marginRight: 15}}>
        <Text style={styles.expText}>{item.expDay} days remaining</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            getPromoCode(item.promoCode);
            onModalHidden();
          }}>
          <Text style={styles.buttonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
export default PromoCell;
