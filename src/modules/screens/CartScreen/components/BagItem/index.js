import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppIcons } from '../../../../../general/constants/AppResource';
import CartUtils from '../../CartUtils';
import styles from './styles';
BagItem.propTypes = {
  item: PropTypes.object,
  handleIncrement: PropTypes.func,
  handleDescreasement: PropTypes.func,
};
BagItem.defaultProps = {
  item: null,
  handleIncrement: () => {},
  handleDescreasement: () => {},
};
var cartUtils = new CartUtils();
function BagItem(props) {
  const {item, handleIncrement, handleDescreasement} = props;
  let tempPrice = item.price * item.quantity;
  let tempDiscountPrice = tempPrice - tempPrice * (item.discountPercent / 100);
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(tempPrice);
  const [discountPrice, setDiscountPrice] = useState(tempDiscountPrice);
  return (
    <TouchableOpacity style={styles.bagItem}>
      <View style={styles.imageSection}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.itemSection}>
        <View style={styles.itemName}>
          <Text style={styles.nameText}>{item.name}</Text>
        </View>
        <View style={styles.itemDetail}>
          <View>
            <Text style={styles.itemText}>Color: {item.color}</Text>
          </View>
          <View style={{marginLeft: 13}}>
            <Text style={styles.itemText}>Size: {item.size}</Text>
          </View>
        </View>
        <View style={styles.quantityChange}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (quantity > 0) {
                let tempQuantity = quantity - 1;
                tempPrice = tempQuantity * item.price;
                tempDiscountPrice =
                  tempPrice * (1 - item.discountPercent / 100);
                setQuantity(tempQuantity);
                setPrice(tempPrice);
                setDiscountPrice(tempDiscountPrice);
                handleDescreasement(tempPrice, tempDiscountPrice);
              }
              console.log('Quantity: ', quantity);
            }}>
            <Image source={AppIcons.remove} />
          </TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.text}>{quantity}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              let tempQuantity = quantity + 1;
              tempPrice = tempQuantity * item.price;
              tempDiscountPrice = tempPrice * (1 - item.discountPercent / 100);
              setQuantity(tempQuantity);
              setPrice(tempPrice);
              setDiscountPrice(tempDiscountPrice);
              handleIncrement(tempPrice, tempDiscountPrice);
            }}>
            <Image source={AppIcons.add} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.moreSection}>
        <TouchableOpacity>
          <Image source={AppIcons.more} />
        </TouchableOpacity>
        <Text>${price}</Text>
        <Text style={styles.priceText}>${discountPrice}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default BagItem;
