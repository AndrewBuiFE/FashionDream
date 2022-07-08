import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
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
  const [price, setPrice] = useState(tempPrice);
  const [discountPrice, setDiscountPrice] = useState(tempDiscountPrice);
  const {cartData} = useSelector(state => state.cart);
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
              if (item.quantity > 1) {
                let tempQuantity = item.quantity - 1;
                tempPrice = tempQuantity * item.price;
                tempDiscountPrice =
                  tempPrice * (1 - item.discountPercent / 100);
                setPrice(tempPrice);
                setDiscountPrice(tempDiscountPrice);
                handleDescreasement(tempQuantity);
              } else {
                Alert.alert(
                  'Delete',
                  `Are you sure you want to delete this item ?`,
                  [
                    {
                      text: 'Delete',
                      onPress: () => {
                        cartUtils.removeCartItem(item, cartData);
                      },
                    },
                    {
                      text: 'Cancel',
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                  ],
                );
              }
            }}>
            <Image source={AppIcons.remove} />
          </TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.text}>{item.quantity}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              let tempQuantity = item.quantity + 1;
              tempPrice = tempQuantity * item.price;
              tempDiscountPrice = tempPrice * (1 - item.discountPercent / 100);
              setPrice(tempPrice);
              setDiscountPrice(tempDiscountPrice);
              handleIncrement(tempQuantity);
            }}>
            <Image source={AppIcons.add} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.moreSection}>
        <TouchableOpacity>
          <Image source={AppIcons.more} />
        </TouchableOpacity>
        <Text
          style={{
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
          }}>
          ${price}
        </Text>
        <Text style={styles.priceText}>${discountPrice}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default BagItem;
