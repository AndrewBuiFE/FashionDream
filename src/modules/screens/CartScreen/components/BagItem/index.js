import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  AppIcons,
  AppImages
} from '../../../../../general/constants/AppResource';
import styles from './styles';
BagItem.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  itemQuantity: PropTypes.number,
  basePrice: PropTypes.number,
  handleIncrement: PropTypes.func,
};
BagItem.defaultProps = {
  name: '',
  color: '',
  size: '',
  itemQuantity: 0,
  basePrice: 0,
  handleIncrement: () => {},
};
let tempPrice = 0;
let tempQuantity = 0;
function BagItem(props) {
  const {
    name,
    color,
    size,
    itemQuantity,
    basePrice,
    handleIncrement,
    handleDescreasement,
  } = props;
  const [quantity, setQuantity] = useState(itemQuantity);
  tempPrice = basePrice * itemQuantity;
  const [price, setPrice] = useState(tempPrice);
  return (
    <TouchableOpacity style={styles.bagItem}>
      <View style={styles.imageSection}>
        <Image source={AppImages.black} style={styles.image} />
      </View>
      <View style={styles.itemSection}>
        <View style={styles.itemName}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.itemDetail}>
          <View>
            <Text style={styles.itemText}>Color: {color}</Text>
          </View>
          <View style={{marginLeft: 13}}>
            <Text style={styles.itemText}>Size: {size}</Text>
          </View>
        </View>
        <View style={styles.quantityChange}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              console.log('Quantity: ', quantity);
              if (quantity > 0) {
                setQuantity(quantity - 1);
                setPrice((quantity - 1) * basePrice);
                handleDescreasement();
              }
            }}>
            <Image source={AppIcons.remove} />
          </TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.text}>{quantity}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setQuantity(quantity + 1);
              setPrice((quantity + 1) * basePrice);
              handleIncrement();
            }}>
            <Image source={AppIcons.add} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.moreSection}>
        <TouchableOpacity>
          <Image source={AppIcons.more} />
        </TouchableOpacity>
        <Text style={styles.priceText}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default BagItem;
