import PaymentCard from "../PaymentCard";
import ShippingAddress from "../ShippingAddress";

export default class CheckOut {
  shippingAddress: ShippingAddress;
  paymentCard: PaymentCard;
  delivery: number;
  constructor(checkout = null) {
    this.shippingAddress =
      checkout && checkout.shippingAddress ? checkout.shippingAddress : null;
    this.paymentCard =
      checkout && checkout.paymentCard ? checkout.paymentCard : null;
    this.delivery = checkout && checkout.delivery ? checkout.delivery : 0;
  }
}
