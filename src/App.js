
import React from "react";
import { initialWindowMetrics, SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./libs/storage/AppStore";
import AppNavigator from "./modules/navigator/AppNavigator";
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;
