import AuthScreen from '../../screens/Shared/Auth/AuthScreen';
import React from 'react';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import CustomHeaderBrandBack from '../CustomHeaderBrandBack/CustomHeaderBrandBack';
import SearchStack from './SearchStack';
import ProductDetailScreen from '../../screens/Shared/ProductDetailScreen/ProductDetailScreen';
import CustomHeaderTextBack from '../CustomHeaderTextBack/CustomHeaderTextBack';
import HalProductDetailScreen from '../../screens/Shared/HalProductDetailScreen/HalProductDetailScreen';
import PazarProductDetailScreen from '../../screens/Shared/PazarProductDetailScreen/PazarProductDetailScreen';
import GlobalSearchModalScreen from '../../screens/Shared/GlobalSearchModalScreen/GlobalSearchModalScreen';
import PhoneVerificationScreen from '../../screens/Shared/PhoneVerificationScreen/PhoneVerificationScreen';
import StoreStack from './StoreStack';
import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const forFade = (progress: any) => ({
  cardStyle: {
    opacity: progress.current.progress,
  },
});

const RootStack = ({navigation}: {navigation: any}, {route}: {route: any}) => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="tab_stack"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="search_stack"
        component={SearchStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="global_search_modal_screen"
        component={GlobalSearchModalScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="product_detail_screen"
        component={ProductDetailScreen}
        options={({route}) => ({
          title:
            route.params &&
            (route.params as {productName: string; id: string}).productName,
          header: (props: StackHeaderProps) => (
            <CustomHeaderTextBack {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="hal_product_detail_screen"
        component={HalProductDetailScreen}
        options={({route}) => ({
          title:
            route.params &&
            (route.params as {productName: string; id: string}).productName,
          header: (props: StackHeaderProps) => (
            <CustomHeaderTextBack {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="pazar_product_detail_screen"
        component={PazarProductDetailScreen}
        options={({route}) => ({
          title:
            route.params &&
            (route.params as {productName: string; id: string}).productName,
          header: (props: StackHeaderProps) => (
            <CustomHeaderTextBack {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="store_stack"
        component={StoreStack}
        options={({route}) => ({
          title:
            route.params &&
            (route.params as {storeName: string; id: string}).storeName,
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="auth_stack"
        component={AuthStack}
        options={{
          // header: (props: StackHeaderProps) => (
          //   <CustomHeaderBrandBack {...props} />
          // ),
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="phone_verification_screen"
        component={PhoneVerificationScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <CustomHeaderBrandBack {...props} />
          ),
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
