export default class ShippingAddress {
  // id: number;
  country: string;
  zipcode: string;
  address: string;
  customerName: string;
  city: string;
  state: string;
  constructor(shipInfo = null) {
    // this.id = shipInfo && shipInfo.id ? shipInfo.id : 1;
    this.country = shipInfo && shipInfo.country ? shipInfo.country : '';
    this.zipcode = shipInfo && shipInfo.zipcode ? shipInfo.zipcode : '';
    this.address = shipInfo && shipInfo.address ? shipInfo.address : '';
    this.customerName =
      shipInfo && shipInfo.customerName ? shipInfo.customerName : '';
    this.city = shipInfo && shipInfo.city ? shipInfo.city : '';
    this.state = shipInfo && shipInfo.state ? shipInfo.state : '';
  }
}
