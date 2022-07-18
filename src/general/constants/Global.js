import {Dimensions} from 'react-native';
export const AppConfig = {
  emailFeedback: 'buiviethoang12062000@gmail.com',
  ignoreGetConfig: false,
  maxItems: 100,
  token: '',
  refreshToken: '',
};
export const HostName = 'http://20.2.129.191:8099';
export const DeviceConstants = {
  screenWidth: Dimensions.get('screen').width,
  screenHeight: Dimensions.get('screen').height,
  minScreenSize: Math.min([
    Dimensions.get('screen').width,
    Dimensions.get('screen').height,
  ]),
  maxScreenSize: Math.max([
    Dimensions.get('screen').width,
    Dimensions.get('screen').height,
  ]),
};
export const PreferenceKeys = {
  Product: 'Products',
  CartData: 'CartData',
  ShippingAddress: 'ShippingAddress',
  PaymentCard: 'PaymentCard',
  Checkout: 'Checkout',
};
