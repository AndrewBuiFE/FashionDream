import { createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ScreenNames } from '../../general/constants/ScreenNames';
import CatalogScreen from '../screens/CatalogScreen';
import AllCategory from '../screens/CategoryScreen/AllCategory';
import ProductCardScreen from '../screens/ProductCardScreen';
NestedCategory.propTypes = {};
const Stack = createNativeStackNavigator();
export const appNavigation = createNavigationContainerRef();
function NestedCategory(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.allCategory}>
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
        name={ScreenNames.productCardScreen}
        component={ProductCardScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default NestedCategory;
