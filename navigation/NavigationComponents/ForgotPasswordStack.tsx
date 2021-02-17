import React from 'react';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';

import ForgotPasswordScreen from '../../screens/Shared/Auth/ForgotPassword/ForgotPasswordScreen/ForgotPasswordScreen';
import SelectForgotMethodScreen from '../../screens/Shared/Auth/ForgotPassword/SelectForgotMethodScreen/SelectForgotMethodScreen';
import ForgotCodeScreen from '../../screens/Shared/Auth/ForgotPassword/ForgotCodeScreen/ForgotCodeScreen';
import CustomHeaderBrandBack from '../CustomHeaderBrandBack/CustomHeaderBrandBack';

const Stack = createStackNavigator();

const ForgotPasswordStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="password_forgot_screen"
        component={ForgotPasswordScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <CustomHeaderBrandBack {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="select_forgot_method_screen"
        component={SelectForgotMethodScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <CustomHeaderBrandBack {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="forgot_code_screen"
        component={ForgotCodeScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <CustomHeaderBrandBack {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ForgotPasswordStack;
