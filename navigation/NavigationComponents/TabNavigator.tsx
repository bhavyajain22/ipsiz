import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabBar from '../CustomTabBar/CustomTabBar';
import HomeStack from './HomeStack';
import CategoryStack from './CategoryStack';
import CartStack from './CartStack';
import ProfileStack from './ProfileStack';
//import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator    tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="home_stack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Anasayfa',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="home" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="category_stack"
        component={CategoryStack}
        options={{
          tabBarVisible: true,
          tabBarLabel: 'Kategoriler',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="search" color={color} size={20} />
          ),
        }}

      />
      <Tab.Screen
        name="cart_stack"
        component={CartStack}
        options={{
          tabBarLabel: 'Sepetim',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="shopping-cart" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="profile_stack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Hesabım',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user" color={color} size={20} />
          ),
        }}
      />
        <Tab.Screen
            name="search_stack"
            component={SearchStack}
            options={{
                headerShown: false
            }}
        />

    </Tab.Navigator>

  );
};

export default TabNavigator;
