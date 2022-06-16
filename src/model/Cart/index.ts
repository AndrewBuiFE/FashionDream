import Product from '../Product/index';

export default class Cart {
  id: number;
  listProduct: Array<Product>;
  constructor(cart = null) {
    this.listProduct = cart && cart.listProduct ? cart.listProduct : [];
    this.id = cart && cart.id ? cart.id : 0;
  }
}
