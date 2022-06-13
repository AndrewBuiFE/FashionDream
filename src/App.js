import React, { useEffect } from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { loadCartData } from './general/helpers/Utils';
import { store } from './libs/storage/AppStore';
import AppNavigator from './modules/navigator/AppNavigator';
import { setCartData } from './modules/screens/CartScreen/CartSlice';

const App: () => Node = () => {
  useEffect(() => {
    (async () => {
      try {
        // tempSetCartData();
        let cartData = await loadCartData();
        store.dispatch(setCartData(cartData));
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
