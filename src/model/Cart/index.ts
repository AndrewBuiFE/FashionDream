import Product from '../Product/index';

export default class Cart {
  Id: number;
  ListProduct: Array<Product>;
  constructor(cart = null) {
    this.ListProduct = cart && cart.ListProduct ? cart.ListProduct : [];
    this.Id = cart && cart.Id ? cart.Id : 0;
  }
}
