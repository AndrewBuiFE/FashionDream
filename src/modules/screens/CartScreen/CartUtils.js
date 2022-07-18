import {PreferenceKeys} from '../../../general/constants/Global';
import {store} from '../../../libs/storage/AppStore';
import {setPreference} from '../../../libs/storage/PreferenceStorage';
import {setCartData} from './CartSlice';

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
  getCartItem(item, cartData) {
    for (let cartItem of cartData.listProduct) {
      if (
        cartItem.productInfo.productId == item.productInfo.productId &&
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
    var newData = cartData;
    newData.listProduct = newData.listProduct.filter(
      obj =>
        obj.productInfo.productId != item.productInfo.productId ||
        (obj.productInfo.productId == item.productInfo.productId &&
          (obj.color != item.color || obj.size != item.size)),
    );
    store.dispatch(setCartData(cartData));
    this.saveCartData(cartData);
  }
  isDuplicateProduct(product, cartData) {
    let different = true;
    let productList = cartData.listProduct;
    if (cartData.listProduct.length === 0) {
      console.log('Cart is empty, able to add!');
      return false;
    }
    for (let item of productList) {
      if (item.productInfo.productId != product.productInfo.productId) {
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
