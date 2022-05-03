import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ScreenNames} from '../../general/constants/ScreenNames';
import CatalogScreen from '../screens/CatalogScreen';
import CategoryScreen from '../screens/CategoryScreen';
import AllCategory from '../screens/CategoryScreen/AllCategory';
NestedCategory.propTypes = {};
const Stack = createNativeStackNavigator();
export const appNavigation = createNavigationContainerRef();
function NestedCategory(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
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
    </Stack.Navigator>
  );
}
export default NestedCategory;
