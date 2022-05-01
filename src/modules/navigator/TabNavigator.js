import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppIcons} from '../../general/constants/AppResource';
import {AppColors, AppDimensions} from '../../general/constants/AppStyle';
import {ScreenNames} from '../../general/constants/ScreenNames';
import ForgotScreen from '../screens/ForgotScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
TabNavigator.propTypes = {};
const Tab = createBottomTabNavigator();
const TabBarIcons = {
  HomeTab: {icon: AppIcons.home},
  ShopTab: {icon: AppIcons.shopping_cart},
  BagTab: {
    icon: AppIcons.bag,
  },
  FavoriteTab: {
    icon: AppIcons.heart,
  },
  ProfileTab: {
    icon: AppIcons.profile,
  },
};
function TabNavigator(props) {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          const iconSource = focused
            ? TabBarIcons[route.name].icon[0]
            : TabBarIcons[route.name].icon[0];
          const tintColor = focused
            ? AppColors.tabBarFocusedColor
            : AppColors.tabBarNormalColor;
          return (
            <Image
              source={iconSource}
              width={AppDimensions.TabBar.iconSize}
              height={AppDimensions.TabBar.iconSize}
            />
          );
        },
        tabBarStyle: {
          // backgroundColor: 'black',
          height: 70 + insets.bottom,
          borderTopWidth: 0,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Metropolis',
          fontSize: AppDimensions.TabBar.fontSize,
          fontWeight: '400',
          lineHeight: 10,
          color: '#ABB4BD',
        },
        tabBarItemStyle: {
          // backgroundColor: 'yellow',
          height: 70,
        },
        tabBarInactiveTintColor: AppColors.tabBarNormalColor,
        tabBarActiveTintColor: AppColors.tabBarFocusedColor,
      })}
      initialRouteName={ScreenNames.homeTab}>
      <Tab.Screen
        name={ScreenNames.homeTab}
        component={LoginScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name={ScreenNames.shopTab}
        component={SignupScreen}
        options={{title: 'Shop'}}
      />
      <Tab.Screen
        name={ScreenNames.bagTab}
        component={ForgotScreen}
        options={{title: 'Bag'}}
      />
      <Tab.Screen
        name={ScreenNames.favoriteTab}
        component={LoginScreen}
        options={{title: 'Favorites'}}
      />
      <Tab.Screen
        name={ScreenNames.profileTab}
        component={SignupScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
