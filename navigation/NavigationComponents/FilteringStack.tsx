import React from 'react';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import FilteringScreen from '../../screens/Shared/Filtering/FilteringScreen/FilteringScreen';
import CustomHeaderFiltering from '../CustomHeaderFiltering/CustomHeaderFiltering';
import FilteringDeepCategoryScreen from '../../screens/Shared/Filtering/FilteringDeepCategoryScreen/FilteringDeepCategoryScreen';
import {ICategoryItem} from '../../types/ICategory.type';
import FilteringBrandsScreen from '../../screens/Shared/Filtering/FilteringBrandsScreen/FilteringBrandsScreen';
import FilteringStoresScreen from '../../screens/Shared/Filtering/FilteringStoresScreen/FilteringStoresScreen';
import FilteringPriceRangeScreen from '../../screens/Shared/Filtering/FilteringPriceRangeScreen/FilteringPriceRangeScreen';
import FilteringRatingScreen from '../../screens/Shared/Filtering/FilteringRatingScreen/FilteringRatingScreen';

const Stack = createStackNavigator();

const FilteringStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="filtering_screen"
        component={FilteringScreen}
        options={() => ({
          title: 'Filtreleme',
          header: (props: StackHeaderProps) => (
            <CustomHeaderFiltering {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="filtering_deep_category_screen"
        component={FilteringDeepCategoryScreen}
        options={({route}) => ({
          title:
            route.params &&
            (route.params as {selectedCategory: ICategoryItem}).selectedCategory
              .text,
          header: (props: StackHeaderProps) => (
            <CustomHeaderFiltering {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="filtering_brands_screen"
        component={FilteringBrandsScreen}
        options={() => ({
          title: 'Markalar',
          header: (props: StackHeaderProps) => (
            <CustomHeaderFiltering {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="filtering_stores_screen"
        component={FilteringStoresScreen}
        options={() => ({
          title: 'Mağazalar',
          header: (props: StackHeaderProps) => (
            <CustomHeaderFiltering {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="filtering_price_range_screen"
        component={FilteringPriceRangeScreen}
        options={() => ({
          title: 'Fiyat Aralığı',
          header: (props: StackHeaderProps) => (
            <CustomHeaderFiltering {...props} />
          ),
        })}
      />
      <Stack.Screen
        name="filtering_rating_screen"
        component={FilteringRatingScreen}
        options={() => ({
          title: 'Ürün Puanı',
          header: (props: StackHeaderProps) => (
            <CustomHeaderFiltering {...props} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default FilteringStack;
