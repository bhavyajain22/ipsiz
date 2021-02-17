import React from 'react';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import CustomHeaderSearch from '../CustomHeaderSearch/CustomHeaderSearch';

import CategoryScreen from '../../screens/Category/CategoryScreen/CategoryScreen';
import CategoryDeepScreen from '../../screens/Category/CategoryDeepScreen/CategoryDeepScreen';
import {ICategoryItem} from '../../types/ICategory.type';
import CustomHeaderDeepCategory from '../CustomHeaderDeepCategory/CustomHeaderDeepCategory';

const Stack = createStackNavigator();

const CategoryStack: React.FC<{}> = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="category_screen"
        component={CategoryScreen}
        options={{
          headerTitle: 'Kategori',
          header: (props: StackHeaderProps) => (
            <CustomHeaderSearch {...props} />
          ),
        }}
      />
      <Stack.Screen
        name="category_deep_screen"
        component={CategoryDeepScreen}
        options={({route}) => ({
          title:
            route.params &&
            ((route.params as any).selectedItem as ICategoryItem).text,
          header: (props: StackHeaderProps) => (
            <CustomHeaderDeepCategory {...props} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default CategoryStack;
