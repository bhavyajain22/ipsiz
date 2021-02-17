import React from 'react';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import CarsiScreen from '../../screens/Home/CarsiScreen/CarsiScreen';
import HalScreen from '../../screens/Home/HalScreen/HalScreen';
import PazarScreen from '../../screens/Home/PazarScreen/PazarScreen';
import CustomHeaderSearch from '../CustomHeaderSearch/CustomHeaderSearch';
import ProductDetailScreen from '../../screens/Shared/ProductDetailScreen/ProductDetailScreen';
import CustomHeaderTextBack from '../CustomHeaderTextBack/CustomHeaderTextBack';
import HalProductDetailScreen from '../../screens/Shared/HalProductDetailScreen/HalProductDetailScreen';
import PazarProductDetailScreen from '../../screens/Shared/PazarProductDetailScreen/PazarProductDetailScreen';
import CustomHeaderBrandBack from '../CustomHeaderBrandBack/CustomHeaderBrandBack';

const Stack = createStackNavigator();

const HomeStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="carsi_screen"
        component={CarsiScreen}
        options={{
          headerTitle: 'Çarşı',
          header: (props: StackHeaderProps) => (
            <CustomHeaderBrandBack {...props} noShowBack />
          ),
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="hal_screen"
        component={HalScreen}
        options={{
          headerTitle: 'Hal',
          header: (props: StackHeaderProps) => (
            <CustomHeaderSearch {...props} />
          ),
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="pazar_screen"
        component={PazarScreen}
        options={{
          headerTitle: 'Pazar',
          header: (props: StackHeaderProps) => (
            <CustomHeaderSearch {...props} />
          ),
          animationEnabled: false,
        }}
      />
      <Stack.Screen
        name="product_detail_screen"
        component={ProductDetailScreen}
        options={({route}) => ({
          tabBarVisible: true,
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
    </Stack.Navigator>
  );
};

export default HomeStack;
