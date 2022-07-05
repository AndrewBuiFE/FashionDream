import { Dimensions } from "react-native";
export const AppConfig = {
  emailFeedback: "buiviethoang12062000@gmail.com",
  ignoreGetConfig: false,
  maxItems: 100,
};
export const HostName = 'http://192.168.100.181:8000'
export const DeviceConstants = {
  screenWidth: Dimensions.get("screen").width,
  screenHeight: Dimensions.get("screen").height,
  minScreenSize: Math.min([
    Dimensions.get("screen").width,
    Dimensions.get("screen").height,
  ]),
  maxScreenSize: Math.max([
    Dimensions.get("screen").width,
    Dimensions.get("screen").height,
  ]),
};
export const PreferenceKeys = {
    Product: 'Products',
    CartData: 'CartData',
    ShippingAddress: 'ShippingAddress',
    PaymentCard: 'PaymentCard',
    Checkout: 'Checkout',
}