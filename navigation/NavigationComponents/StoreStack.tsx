import React from 'react';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import StoreDetailScreen from '../../screens/Shared/Store/StoreDetailScreen/StoreDetailScreen';
import StoreProductsScreen from '../../screens/Shared/Store/StoreProductsScreen/StoreProductsScreen';
import CustomHeaderTextBack from '../CustomHeaderTextBack/CustomHeaderTextBack';

const Stack = createStackNavigator();

const StoreStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="store_detail_screen"
        component={StoreDetailScreen}
        options={({route}) => ({
          title:
            route.params &&
            (route.params as {shopName: string; id: string}).shopName,
          header: (props: StackHeaderProps) => (
            <CustomHeaderTextBack {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="store_products_screen"
        component={StoreProductsScreen}
        options={({route}) => ({
          title:
            route.params &&
            (route.params as {shopName: string; id: string}).shopName,
          header: (props: StackHeaderProps) => (
            <CustomHeaderTextBack {...props} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default StoreStack;
