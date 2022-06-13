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
  // getCartItem(itemId, cartData) {
  //     for (let item of cartData.ListProduct) {
  //         if (item.id == itemId) {
  //             console.log('Found!');
  //             console.log('item: ', item);
  //             return item;
  //         }
  //     }
  // }
  addCartItem(item, cartData) {
    let newCartData = {...cartData};
    newCartData.ListProduct.push(item);
    setCartData(newCartData);
    this.saveCartData(newCartData);
  }
  isDuplicateProduct(product, cartData) {
    let productList = cartData.ListProduct;
    console.log('ProductList: ', productList);
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
