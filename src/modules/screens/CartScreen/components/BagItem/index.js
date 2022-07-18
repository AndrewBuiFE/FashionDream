import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Alert, Image, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {AppIcons, AppImages} from '../../../../../general/constants/AppResource';
import CartUtils from '../../CartUtils';
import styles from './styles';
BagItem.propTypes = {
  productItem: PropTypes.object,
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
  const {productItem, handleIncrement, handleDescreasement} = props;
  let tempPrice = productItem.productInfo.price * productItem.amount;
  let tempDiscountPrice = tempPrice - tempPrice * (productItem.productInfo.discountPercent / 100);
  const [price, setPrice] = useState(tempPrice);
  const [discountPrice, setDiscountPrice] = useState(tempDiscountPrice);
  const {cartData} = useSelector(state => state.cart);
  return (
    <View style={styles.bagItem}>
      <View style={styles.imageSection}>
        <Image
          source={
            Array.isArray(productItem.productInfo.image)
            ? {
                uri: productItem.productInfo.image[0].startsWith('http')
                  ? productItem.productInfo.image[0]
                  : AppImages.black,
              }
            : AppImages.black
          }
          style={styles.image}
        />
      </View>
      <View style={styles.itemSection}>
        <View style={styles.itemName}>
          <Text style={styles.nameText}>{productItem.productInfo.name}</Text>
        </View>
        <View style={styles.itemDetail}>
          <View>
            <Text style={styles.itemText}>Color: {productItem.color}</Text>
          </View>
          <View style={{marginLeft: 13}}>
            <Text style={styles.itemText}>Size: {productItem.size}</Text>
          </View>
        </View>
        <View style={styles.quantityChange}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (productItem.amount > 1) {
                let tempQuantity = productItem.amount - 1;
                tempPrice = tempQuantity * productItem.productInfo.price;
                tempDiscountPrice =
                  tempPrice * (1 - productItem.productInfo.discountPercent / 100);
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
                        cartUtils.removeCartItem(productItem, cartData);
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
            <Text style={styles.text}>{productItem.amount}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              let tempQuantity = productItem.amount + 1;
              tempPrice = tempQuantity * productItem.productInfo.price;
              tempDiscountPrice = tempPrice * (1 - productItem.productInfo.discountPercent / 100);
              setPrice(tempPrice);
              setDiscountPrice(tempDiscountPrice);
              handleIncrement(tempQuantity);
            }}>
            <Image source={AppIcons.add} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.moreSection}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              'Delete',
              `Are you sure you want to delete this item ?`,
              [
                {
                  text: 'Delete',
                  onPress: () => {
                    cartUtils.removeCartItem(productItem, cartData);
                  },
                },
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
              ],
            );
          }}>
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
    </View>
  );
}
export default BagItem;
