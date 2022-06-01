export default class ShippingAddress {
    Id: number;
    Country: string;
    Zipcode: string;
    Address: string;
    CustomerName: string;
    City: string;
    State: string;
    constructor(shipInfo = null) {
      this.Id = shipInfo && shipInfo.Id ? shipInfo.Id : 1;
      this.Country = shipInfo && shipInfo.Country ? shipInfo.Country : '';
      this.Zipcode = shipInfo && shipInfo.Zipcode ? shipInfo.Zipcode: '';
      this.Address = shipInfo && shipInfo.Address ? shipInfo.Address: '';
      this.CustomerName = shipInfo && shipInfo.CustomerName ? shipInfo.CustomerName: '';
      this.City = shipInfo && shipInfo.City ? shipInfo.City : '';
      this.State = shipInfo && shipInfo.State ? shipInfo.State : '';
    }
  }
  