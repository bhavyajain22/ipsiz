import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FilteringStack from './FilteringStack';
import InnerSearchStack from './InnerSearchStack';

const Stack = createStackNavigator();

const SearchStack = () => {
  return (
    <Stack.Navigator>
      {/** TODO: CHANGE NAME TO INNER STACK THROUGHOUT THE APP */}
      <Stack.Screen
        name="search_modal_stack"
        component={InnerSearchStack}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="filtering_stack"
        component={FilteringStack}
        options={{
          title: 'Filtrele',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default SearchStack;
