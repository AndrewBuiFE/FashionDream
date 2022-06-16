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
    let newCartData = {...cartData};
    newCartData.listProduct.push(item);
    store.dispatch(setCartData(newCartData));
    this.saveCartData(newCartData);
  }
  updateCartItemQuantity(item, cartData) {
    let newCartData = {...cartData};
    debugger;
    let newListProduct = newCartData.listProduct.filter(
      obj => obj.productId != item.productId,
    );
    newListProduct.push(item);
    newCartData.listProduct = newListProduct;
    store.dispatch(setCartData(newCartData));
    this.saveCartData(newCartData);
  }
  removeCartItem(item, cartData) {
    let itemList = cartData.listProduct;
    let newItemList = itemList.filter(obj => obj.id != item.id);
    cartData.listProduct = newItemList;
    store.dispatch(setCartData(cartData));
    this.saveCartData(cartData);
  }
  isDuplicateProduct(product, cartData) {
    debugger;
    let productList = cartData.listProduct;
    for (let item of productList) {
      if (item.productId != product.productId) {
        continue;
      } else {
        if (item.color == product.color && item.size == product.size) {
          console.log('Same product!');
          return true;
        } else {
          console.log('Same product but not same color or size');
          return false;
        }
      }
    }
    console.log('Different product!');
    return false;
  }
}
export default CartUtils;
