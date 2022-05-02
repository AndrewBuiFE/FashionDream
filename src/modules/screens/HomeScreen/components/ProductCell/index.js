import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {
  AppIcons,
  AppImages,
} from '../../../../../general/constants/AppResource';
import Reviewing from '../Reviewing';
import styles from './styles';
ProductCell.propTypes = {
  starCount: PropTypes.number,
  brandName: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
  discountPrice: PropTypes.number,
};
ProductCell.defaultProps = {
  starCount: 0,
  brandName: 'Dorothy Perkins',
  productName: 'Evening Dress',
  price: 15,
  discountPrice: 12,
};

function ProductCell(props) {
  const {starCount, brandName, productName, price, discountPrice} = props;
  return (
    <TouchableOpacity style={styles.productContainer}>
      <View style={styles.imageSection}>
        <Image source={AppImages.black} style={styles.image} />
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>-20%</Text>
        </View>
        <View style={styles.likeContainer}>
          <Image source={AppIcons.heart_small} />
        </View>
      </View>
      <View style={styles.infoSection}>
        <Reviewing starCount={starCount} />
        <View style={styles.textSection}>
          <Text style={styles.brand}>{brandName}</Text>
          <Text style={styles.product}>{productName}</Text>
          <View style={styles.priceSection}>
            <Text style={styles.price}>{price}$</Text>
            <Text style={[styles.price, {color: '#FF3E3E', marginLeft: 4}]}>
              {discountPrice}$
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default ProductCell;
