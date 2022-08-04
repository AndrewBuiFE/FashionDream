import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {AppIcons} from '../../general/constants/AppResource';
import {AppColors, AppDimensions} from '../../general/constants/AppStyle';
import { AppConfig } from '../../general/constants/Global';
import {ScreenNames} from '../../general/constants/ScreenNames';
import {isAndroid} from '../../general/helpers/Utils';
import commonApi from '../../libs/api/commonApi';
import CartScreen from '../screens/CartScreen/index';
import DemoScreen from '../screens/DemoScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen/index';
import SignupScreen from '../screens/SignupScreen/index';
import NestedCategory from './NestedCategory';
TabNavigator.propTypes = {};
const Tab = createBottomTabNavigator();
const TabBarIcons = {
  HomeTab: {icon: [AppIcons.home, AppIcons.home_active]},
  ShopTab: {icon: [AppIcons.shopping_cart, AppIcons.shopping_cart_active]},
  BagTab: {
    icon: [AppIcons.bag, AppIcons.bag_active],
  },
  BagTabNewItem: {
    icon: [AppIcons.sth_in_bag, AppIcons.bag_active],
  },
  FavoriteTab: {
    icon: [AppIcons.heart, AppIcons.heart_active],
  },
  ProfileTab: {
    icon: [AppIcons.profile, AppIcons.profile_active],
  },
};
function TabNavigator(props) {
  const insets = useSafeAreaInsets();
  const {isCartNewThing} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', e => {
      // Prevent default behavior
      e.preventDefault();

      console.log(e);
    });

    return unsubscribe;
  }, [props.navigation]);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconSource = focused
            ? TabBarIcons[route.name].icon[1]
            : TabBarIcons[route.name].icon[0];
          const iconCartAlert = focused
            ? TabBarIcons.BagTabNewItem.icon[1]
            : TabBarIcons.BagTabNewItem.icon[0];
          const iconCart = focused
            ? TabBarIcons.BagTab.icon[1]
            : TabBarIcons.BagTab.icon[0];
          const tintColor = focused
            ? AppColors.tabBarFocusedColor
            : AppColors.tabBarNormalColor;
          return route.name !== 'BagTab' ? (
            <Image
              source={iconSource}
              width={AppDimensions.TabBar.iconSize}
              height={AppDimensions.TabBar.iconSize}
            />
          ) : (
            <Image
              source={isCartNewThing ? iconCartAlert : iconCart}
              width={AppDimensions.TabBar.iconSize}
              height={AppDimensions.TabBar.iconSize}
            />
          );
        },
        tabBarHideOnKeyboard: isAndroid() ? true : false,
        tabBarStyle: {
          backgroundColor: 'black',
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
        tabBarIconStyle: {
          top: 4,
        },
        tabBarItemStyle: {
          height: 70,
        },
        tabBarInactiveTintColor: AppColors.tabBarNormalColor,
        tabBarActiveTintColor: AppColors.tabBarFocusedColor,
      })}
      initialRouteName={ScreenNames.demoScreen}>
      <Tab.Screen
        name={ScreenNames.homeTab}
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name={ScreenNames.shopTab}
        component={NestedCategory}
        options={{title: 'Shop'}}
      />
      {
          AppConfig.cartCreated ? (      <Tab.Screen
          name={ScreenNames.bagTab}
          component={CartScreen}
          options={{title: 'Bag'}}
        />) : (      <Tab.Screen
          name={ScreenNames.bagTab}
          component={LoginScreen}
          options={{title: 'Bag'}}
        />)
      }
      <Tab.Screen
        name={ScreenNames.favoriteTab}
        component={SignupScreen}
        options={{title: 'Favorites'}}
      />
      <Tab.Screen
        name={ScreenNames.profileTab}
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
}
export default TabNavigator;
