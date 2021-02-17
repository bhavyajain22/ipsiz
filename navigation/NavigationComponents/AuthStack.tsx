import React from 'react';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';

import AuthScreen from '../../screens/Shared/Auth/AuthScreen';
import CustomHeaderBrandBack from '../CustomHeaderBrandBack/CustomHeaderBrandBack';
import ForgotPasswordStack from './ForgotPasswordStack';

const Stack = createStackNavigator();

const AuthStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="auth_screen"
        component={AuthScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <CustomHeaderBrandBack {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="forgot_password_stack"
        component={ForgotPasswordStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
