import PaymentCard from '../PaymentCard/index';
import ShippingAddress from '../ShippingAddress/index';

export default class CheckOut {
  ShippingAddress: ShippingAddress;
  PaymentCard: PaymentCard;
  Delivery: number;
  TotalCost: number;
  constructor(checkout = null) {
    this.ShippingAddress =
      checkout && checkout.ShippingAddress ? checkout.ShippingAddress : null;
    this.PaymentCard =
      checkout && checkout.PaymentCard ? checkout.PaymentCard : null;
    this.Delivery = checkout && checkout.Delivery ? checkout.Delivery : 0;
    this.TotalCost = checkout && checkout.TotalCost ? checkout.TotalCost : 0;
  }
}
