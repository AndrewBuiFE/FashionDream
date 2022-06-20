import { store } from '../../../libs/storage/AppStore';
import { setCartData } from './CartSlice';

const {PreferenceKeys} = require('../../../general/constants/Global');
const {setPreference} = require('../../../libs/storage/PreferenceStorage');

class CartUtils {
  constructor() {}
  async saveCartData(cartData) {
    try {
      debugger;
      const stringifyData = JSON.stringify(cartData);
      await setPreference(PreferenceKeys.CartData, stringifyData);
    } catch (error) {
      console.log(error);
    }
  }
  getCartItem(item, cartData) {
    debugger;
    for (let cartItem of cartData.listProduct) {
      if (
        cartItem.productId == item.productId &&
        item.color == cartItem.color &&
        item.size == cartItem.size
      ) {
        return cartItem;
      }
    }
    return null;
  }
  addCartItem(item, cartData) {
    var newCartData = cartData;
    newCartData.listProduct.push(item);
    store.dispatch(setCartData(newCartData));
    this.saveCartData(newCartData);
  }
  updateCartItemQuantity(item, cartData) {
    var newData = cartData;
    this.removeCartItem(item, newData);
    this.addCartItem(item, newData);
    store.dispatch(setCartData(newData));
    this.saveCartData(newData);
  }
  removeCartItem(item, cartData) {
    var newData = cartData
    newData.listProduct = newData.listProduct.filter(obj => obj.id != item.id);
    store.dispatch(setCartData(cartData));
    this.saveCartData(cartData);
  }
  isDuplicateProduct(product, cartData) {
    debugger;
    let different = true;
    let productList = cartData.listProduct;
    for (let item of productList) {
      if (item.productId != product.productId) {
        continue;
      } else {
        different = false;
        if (item.color == product.color && item.size == product.size) {
          console.log('Same product!');
          return true;
        } else {
          continue;
        }
      }
    }
    if (different) console.log('Different product!');
    else console.log('Same product but not same color or size');
    return false;
  }
}
export default CartUtils;
