export default class PaymentCard {
  Id: number;
  CardNumber: number;
  CardName: string;
  ExpDate: string;
  CVV: number;
  constructor(cardInfo = null) {
    this.Id = cardInfo && cardInfo.Id ? cardInfo.Id : 1;
    this.CardNumber = cardInfo && cardInfo.CardNumber ? cardInfo.CardNumber : 0;
    this.CardName = cardInfo && cardInfo.CardName ? cardInfo.CardName : '';
    this.ExpDate = cardInfo && cardInfo.ExpDate ? cardInfo.ExpDate : '';
    this.CVV = cardInfo && cardInfo.CVV ? cardInfo.CVV : 0;
  }
}
