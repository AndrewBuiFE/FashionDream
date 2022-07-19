export default class PaymentCard {
  // id: number;
  cardNumber: string;
  holderName: string;
  exp: string;
  cvv: number;
  isDefault: boolean;
  constructor(cardInfo = null) {
    // this.id = cardInfo && cardInfo.id ? cardInfo.id : 1;
    this.cardNumber = cardInfo && cardInfo.cardNumber ? cardInfo.cardNumber : '';
    this.holderName = cardInfo && cardInfo.holderName ? cardInfo.holderName : '';
    this.exp = cardInfo && cardInfo.exp ? cardInfo.exp : '';
    this.cvv = cardInfo && cardInfo.cvv ? cardInfo.cvv : 0;
    this.isDefault = cardInfo && cardInfo.isDefault ? cardInfo.isDefault : 0;
  }
}
