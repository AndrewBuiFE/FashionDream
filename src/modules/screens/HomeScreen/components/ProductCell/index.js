import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {AppIcons} from '../../../../../general/constants/AppResource';
import {ScreenNames} from '../../../../../general/constants/ScreenNames';
import Star from '../../../../components/Star/index';
import styles from './styles';
ProductCell.propTypes = {
  item: PropTypes.object,
  onItemClick: PropTypes.func,
  width: PropTypes.number,
};
ProductCell.defaultProps = {
  item: null,
  width: 150,
  onItemClick: () => {},
};
var discountPrice = 0;
function ProductCell(props) {
  const {item, onItemClick, width} = props;
  discountPrice = item.price - item.price * (item.discountPercent / 100);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.productContainer, {width: width}]}
      onPress={() => {
        onItemClick();
        navigation.navigate(ScreenNames.productCardScreen, {
          document: item,
        });
      }}>
      <View style={[styles.imageSection, {width: width}]}>
        <Image
          source={item.image[0].startsWith('http') ? {uri: item.image[0]} : item.image}
          style={styles.image}
        />
        <View style={styles.discountContainer}>
          <Text style={styles.discountText}>-{item.discountPercent}%</Text>
        </View>
        <View style={styles.likeContainer}>
          <Image source={AppIcons.heart_small} />
        </View>
      </View>
      <View style={styles.infoSection}>
        <View style={styles.starSection}>
          <Star
            starCount={item.starCount}
            starType="small"
            width={item.starCount * 14}
          />
          {/* <Text>({item.noComment})</Text> */}
        </View>
        <View style={styles.textSection}>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.product} numberOfLines={1}>{item.name}</Text>
          <View style={styles.priceSection}>
            <Text
              style={[
                styles.price,
                {
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                },
              ]}>
              {item.price}$
            </Text>
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
