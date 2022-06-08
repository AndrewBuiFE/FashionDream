import Product from '../Product/index';

export default class Cart {
  Id: number;
  ListProduct: Array<Product>;
  TotalMoney: number;
  constructor(cart = null) {
    this.ListProduct = cart && cart.ListProduct ? cart.ListProduct : [];
    this.Id = cart && cart.Id ? cart.Id : 0;
    this.TotalMoney = cart && cart.TotalMoney ? cart.TotalMoney : 0;
  }
}
