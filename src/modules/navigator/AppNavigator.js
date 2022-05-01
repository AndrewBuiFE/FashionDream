import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { ScreenNames } from "../../general/constants/ScreenNames";
import LoginScreen from "../screens/LoginScreen";
AppNavigator.propTypes = {};
const Stack = createNativeStackNavigator();
function AppNavigator(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.loginScreen}>
        <Stack.Screen
          name={ScreenNames.loginScreen}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
