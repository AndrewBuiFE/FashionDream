import React, { useEffect } from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { loadCardData, loadCartData, loadShipData, tempSetCartData } from './general/helpers/Utils';
import { store } from './libs/storage/AppStore';
import AppNavigator from './modules/navigator/AppNavigator';
import { setCartData } from './modules/screens/CartScreen/CartSlice';
import { setCardData, setShipData } from './modules/screens/CheckoutScreen/CheckoutSlice';

const App: () => Node = () => {
  useEffect(() => {
    (async () => {
      try {
        // tempSetCartData();
        let cartData = await loadCartData();
        let shipData = await loadShipData();
        let cardData = await loadCardData();
        store.dispatch(setCartData(cartData));
        store.dispatch(setShipData(shipData));
        store.dispatch(setCardData(cardData));
      } catch (error) {
        alert(error);
      }
    })();
  }, []);
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
