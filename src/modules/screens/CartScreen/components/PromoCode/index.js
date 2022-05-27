import React from 'react';
import { Image, TextInput, TouchableOpacity } from 'react-native';
import { AppIcons } from '../../../../../general/constants/AppResource';
import styles from './styles';
PromoCode.propTypes = {};
PromoCode.defaultProps = {};

function PromoCode(props) {
  const {setShowPromoModal, marginTop, inputValue} = props;
  return (
    <TouchableOpacity style={[styles.promoContainer, {marginTop: marginTop}]}>
      <TextInput
        placeholder="Enter your promo code"
        placeholderTextColor={'#ABB4BD'}
        style={styles.textInput}
        value={inputValue}
      />
      <TouchableOpacity
        style={styles.actionContainer}
        onPress={() => {
          setShowPromoModal(true);
        }}>
        <Image source={AppIcons.promo_arrow} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
export default PromoCode;
