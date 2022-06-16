
const {PreferenceKeys} = require('../../../general/constants/Global');
const {setPreference} = require('../../../libs/storage/PreferenceStorage');

class CheckoutUtils {
  constructor() {}
  async saveShippingAddress(shippingData) {
    try {
      const stringifyData = JSON.stringify(shippingData);
      await setPreference(PreferenceKeys.ShippingAddress, stringifyData);
    } catch (error) {
      console.log(error);
    }
  }
  async saveCardData(cardData) {
    try {
      const stringifyData = JSON.stringify(cardData);
      await setPreference(PreferenceKeys.PaymentCard, stringifyData);
    } catch (error) {
      console.log(error);
    }
  }
  async saveCheckout(checkout) {
    try {
      const stringifyData = JSON.stringify(checkout);
      await setPreference(PreferenceKeys.Checkout, stringifyData);
    } catch (error) {
      console.log(error);
    }
  }

}
export default CheckoutUtils;
