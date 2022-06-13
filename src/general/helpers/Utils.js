import { Platform } from 'react-native';
import { CART } from '../../data';
import { getPreference, setPreference } from '../../libs/storage/PreferenceStorage';
import Cart from '../../model/Cart';
import { PreferenceKeys } from '../constants/Global';

export const isAndroid = () => {
  return Platform.OS === 'android';
};
export const tempSetCartData = async () => {
  const cartData = new Cart();
  cartData.Id = CART.id;
  cartData.ListProduct = [];
  setPreference(PreferenceKeys.CartData, JSON.stringify(cartData));
}
export const loadCartData = async () => {
  try {
    const cartData = await getPreference(PreferenceKeys.CartData);
    // console.log('cartData', cartData)  ;
    if (cartData != null) {
      var jData = JSON.parse(cartData);
      // console.log('jData', jData);
      if (jData != null) {
        var cartDoc = new Cart(jData);
        // console.log('cartDoc', cartDoc);
        return cartDoc;
      }
    }
  } catch (error) {
    console.log(error);
    var cartData = new Cart();
    cartData.Id = CART.id;
    cartData.ListProduct = CART.listProduct;
    return cartData;
  }
  var cartData = new Cart();
  cartData.Id = CART.id;
  cartData.ListProduct = CART.listProduct;
  return cartData;
};