import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  AppIcons,
  AppImages
} from '../../../../../general/constants/AppResource';
import Star from '../../../HomeScreen/components/Star';
import styles from './styles';
HorizonProduct.propTypes = {
  starCount: PropTypes.number,
  brandName: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
  discountPrice: PropTypes.number,
};
HorizonProduct.defaultProps = {
  starCount: 0,
  brandName: 'Dorothy Perkins',
  productName: 'Evening Dress',
  price: 15,
  discountPrice: 12,
};

function HorizonProduct(props) {
  const {starCount, brandName, productName, price, discountPrice} = props;
  const [likeStatus, setLikeStatus] = useState(false);
  return (
    <TouchableOpacity style={styles.productContainer}>
      <View style={styles.imageSection}>
        <Image source={AppImages.black} style={styles.image} />
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.product}>{productName}</Text>
        <Text style={styles.brand}>{brandName}</Text>
        <Star starCount={starCount} />
        <View style={styles.priceSection}>
          <Text style={styles.price}>{price}$</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.likeContainer}
        onPress={() => {
          setLikeStatus(!likeStatus);
        }}>
        {likeStatus ? (
          <Image source={AppIcons.heart_small_active} />
        ) : (
          <Image source={AppIcons.heart_small} />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
export default HorizonProduct;
