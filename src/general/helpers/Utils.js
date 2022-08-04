import { Platform } from 'react-native';
import { CART, PAYMENT_CARD, SHIPPING_ADDRESS } from '../../data';
import { getPreference, setPreference } from '../../libs/storage/PreferenceStorage';
import Cart from '../../model/Cart';
import PaymentCard from '../../model/PaymentCard';
import ShippingAddress from '../../model/ShippingAddress';
import { PreferenceKeys } from '../constants/Global';

export const isAndroid = () => {
  return Platform.OS === 'android';
};
export const tempSetCartData = async () => {
  const cartData = new Cart();
  cartData.id = CART.id;
  cartData.ListProduct = [];
  setPreference(PreferenceKeys.CartData, JSON.stringify(cartData));
}
export const tempSetCarDData = async () => {
  const cardData = new PaymentCard();
  cardData.cardNumber = "943894898493"
  cardData.cvv = 343;
  cardData.exp = "12/06"
  cardData.holderName = "Jane"
  cardData.id = 1;
  cardData.isDefault = false
  setPreference(PreferenceKeys.PaymentCard, JSON.stringify(cardData));
}
export const loadCartData = async () => {
  try {
    const cartData = await getPreference(PreferenceKeys.CartData);
    if (cartData != null) {
      var jData = JSON.parse(cartData);
      // console.log('jData', jData);
      if (jData != null) {
        var cartDoc = new Cart(jData);
        console.log('cartDoc', cartDoc);
        return cartDoc;
      }
    }
  } catch (error) {
    console.log(error);
    var cartData = new Cart(CART);
    // let cartData = [];
    console.log("cart data: ", cartData);
    return cartData;
  }
  var cartData = new Cart(CART);
  // let cartData = [];
  console.log("cart data: ", cartData);
  return cartData;
};
export const loadShipData = async () => {
  try {
    const shipData = await getPreference(PreferenceKeys.ShippingAddress);
    if (shipData != null) {
      var jData = JSON.parse(shipData);
      if (jData != null) {
        var shipDoc = new ShippingAddress(jData);
        return shipDoc;
      }
    }
  } catch (error) {
    console.log(error);
    var shipData = new ShippingAddress(SHIPPING_ADDRESS);
    console.log("ship data: ", shipData);
    return shipData;
  }
  var shipData = new ShippingAddress(SHIPPING_ADDRESS);
  console.log("ship data: ", shipData);
  return shipData;
};
export const loadCardData = async () => {
  try {
    const cardData = await getPreference(PreferenceKeys.PaymentCard);
    // console.log('cartData', cartData)  ;
    if (cardData != null) {
      var jData = JSON.parse(cardData);
      // console.log('jData', jData);
      if (jData != null) {
        var cardDoc = new PaymentCard(jData);
        // console.log('cartDoc', cartDoc);
        return cardDoc;
      }
    }
  } catch (error) {
    console.log(error);
    var cardData = new PaymentCard(PAYMENT_CARD);
    console.log("card data: ", cardData);
    return cardData;
  }
  var cardData = new PaymentCard(PAYMENT_CARD);
  console.log("card data: ", cardData);
  return cardData;
};