import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import SearchModalScreen from '../../screens/Shared/SearchModal/SearchModalScreen';
import CustomHeaderSearchBack from '../CustomHeaderSearchBack/CustomHeaderSearchBack';

const Stack = createStackNavigator();

const InnerSearchStack = () => {
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen
        name="search_modal_screen"
        component={SearchModalScreen}
        options={{
          header: (props: StackHeaderProps) => (
            <CustomHeaderSearchBack {...props} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default InnerSearchStack;
