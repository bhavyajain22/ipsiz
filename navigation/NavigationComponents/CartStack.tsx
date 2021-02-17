//import liraries
import React from 'react';
// import {View, Text} from 'react-native';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import CustomHeaderSearch from '../CustomHeaderSearch/CustomHeaderSearch';

import CartScreen from '../../screens/Cart/CartScreen/CartScreen';

const Stack = createStackNavigator();

const CartStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="cart_screen"
        component={CartScreen}
        options={{
          headerTitle: 'Sepet',
          header: (props: StackHeaderProps) => (
            <CustomHeaderSearch {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
