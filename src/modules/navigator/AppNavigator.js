import {
  createNavigationContainerRef,
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ScreenNames } from '../../general/constants/ScreenNames';
import CatalogScreen from '../screens/CatalogScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AllCategory from '../screens/CategoryScreen/AllCategory';
import CheckOutScreen from '../screens/CheckoutScreen/index';
import ForgotScreen from '../screens/ForgotScreen';
import LoginScreen from '../screens/LoginScreen';
import PaymentScreen from '../screens/PaymentScreen/index';
import ProductCardScreen from '../screens/ProductCardScreen/index';
import ProfileScreen from '../screens/ProfileScreen/index';
import ShippingScreen from '../screens/ShippingScreen/index';
import SignupScreen from '../screens/SignupScreen';
import TabNavigator from './TabNavigator';
AppNavigator.propTypes = {};
const Stack = createNativeStackNavigator();
export const appNavigation = createNavigationContainerRef();
function AppNavigator(props) {
  return (
    <NavigationContainer ref={appNavigation}>
      <Stack.Navigator
        initialRouteName={ScreenNames.mainTab}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Group>
          <Stack.Screen name={ScreenNames.mainTab} component={TabNavigator} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name={ScreenNames.loginScreen}
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.signupScreen}
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.forgotScreen}
            component={ForgotScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.categoryScreen}
            component={CategoryScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.allCategory}
            component={AllCategory}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.catalogScreen}
            component={CatalogScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.productCartScreen}
            component={ProductCardScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.checkoutScreen}
            component={CheckOutScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.paymentScreen}
            component={PaymentScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.shippingScreen}
            component={ShippingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={ScreenNames.profileScreen}
            component={ProfileScreen}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
