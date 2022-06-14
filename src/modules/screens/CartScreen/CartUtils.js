import { store } from '../../../libs/storage/AppStore';
import { setCartData } from './CartSlice';

const {PreferenceKeys} = require('../../../general/constants/Global');
const {setPreference} = require('../../../libs/storage/PreferenceStorage');

class CartUtils {
  constructor() {}
  async saveCartData(cartData) {
    try {
      const stringifyData = JSON.stringify(cartData);
      await setPreference(PreferenceKeys.CartData, stringifyData);
    } catch (error) {
      console.log(error);
    }
  }
  getCartItem(itemId, cartData) {
      for (let item of cartData.ListProduct) {
          if (item.id == itemId) {
              return item;
          }
      }
  }
  addCartItem(item, cartData) {
    let newCartData = cartData;
    newCartData.ListProduct.push(item);
    store.dispatch(setCartData(newCartData));
    this.saveCartData(newCartData);
  }
  updateCartItem(item, cartData) {
    let newItem = this.getCartItem(item.id, cartData);
    newItem.quantity = item.quantity;
    this.saveCartData(cartData);
    // console.log(newItem);
  }
  removeCartItem(item, cartData) {
    let itemList = cartData.ListProduct;
    let newItemList = itemList.filter(obj => obj.id != item.id);
    cartData.ListProduct = newItemList;
    store.dispatch(setCartData(cartData));
    this.saveCartData(cartData);
  }
  isDuplicateProduct(product, cartData) {
    let productList = cartData.ListProduct;
    for (let item of productList) {
      if (item.id != product.id) {
        console.log('Different product!');
        return false;
      } else if (item.color == product.color && item.size == product.size) {
        console.log('Same product!');
        return true;
      } else {
        console.log('Same product but not same color or size');
        return false;
      }
    }
  }


}
export default CartUtils;
