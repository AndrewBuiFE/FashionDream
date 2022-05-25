import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppIcons } from '../../../../../general/constants/AppResource';
import { ScreenNames } from '../../../../../general/constants/ScreenNames';
import Star from '../../../../components/Star/index';
import styles from './styles';
ProductCell.propTypes = {
  item: PropTypes.object,
  onItemClick: PropTypes.func,
};
ProductCell.defaultProps = {
  item: null,
  onItemClick: () => {},
};

function ProductCell(props) {
  const {item, onItemClick} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => {
        onItemClick();
        navigation.navigate(ScreenNames.productCartScreen, {
          document: item,
        });
      }}>
      <View style={styles.imageSection}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>-20%</Text>
        </View>
        <View style={styles.likeContainer}>
          <Image source={AppIcons.heart_small} />
        </View>
      </View>
      <View style={styles.infoSection}>
        <Star starCount={item.starCount} />
        <View style={styles.textSection}>
          <Text style={styles.brand}>{item.brandName}</Text>
          <Text style={styles.product}>{item.productName}</Text>
          <View style={styles.priceSection}>
            <Text style={styles.price}>{item.price}$</Text>
            <Text style={[styles.price, {color: '#FF3E3E', marginLeft: 4}]}>
              {item.discountPrice}$
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ProductCell;
