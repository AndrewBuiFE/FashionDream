import Cart from '../Cart/index';
import PaymentCard from '../PaymentCard/index';
import ShippingAddress from '../ShippingAddress/index';

export default class User {
  Id: number;
  Email: string;
  Password: string;
  CartProduct: Array<Cart>;
  PaymentCard: Array<PaymentCard>;
  ShippingAddress: Array<ShippingAddress>;
  constructor(user = null) {
    this.Id = user && user.Id ? user.Id : 1;
    this.Email = user && user.Email ? user.Email : '';
    this.Password = user && user.Password ? user.Password : '';
    this.CartProduct = user && user.CartProduct ? user.CartProduct : [];
    this.PaymentCard = user && user.PaymentCard ? user.PaymentCard : [];
    this.ShippingAddress =
      user && user.ShippingAddress ? user.ShippingAddress : [];
  }
}
