import React, {useLayoutEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './FilteringDeepCategoryScreen.styles';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import {ICategoryItem} from '../../../../types/ICategory.type';
import BottomDivider from '../../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import {RouteProp} from '@react-navigation/native';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import {COLORS} from '../../../../assets/colors';
import {useDispatch} from 'react-redux';
import {
  changeCategoryAction,
  clearCategoryAction,
} from '../../../../store/actions/filtering.actions';

type FilteringStackParamList = {
  filtering_screen: undefined;
  filtering_deep_category_screen: {
    selectedCategory: ICategoryItem;
    categories: ICategoryItem[];
  };
  filtering_deep_variant_screen: {
    variantName: string;
    variantOptions: {value: string; title: string}[];
  };
};

const FilteringDeepCategoryScreen: React.FC<{
  navigation: StackNavigationProp<
    FilteringStackParamList,
    'filtering_deep_category_screen'
  >;
  route: RouteProp<FilteringStackParamList, 'filtering_deep_category_screen'>;
}> = ({navigation, route}) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      clearButtonFunction: () => {
        dispatch(clearCategoryAction());
        navigation.navigate('filtering_screen');
      },
    } as Partial<StackNavigationOptions & {clearButtonFunction: () => any}>);
  }, [navigation, dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        style={globalStyles.marginTopTwenty}
        data={route.params.categories}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              if (item.children && item.children.length) {
                navigation.push('filtering_deep_category_screen', {
                  selectedCategory: item,
                  categories: item.children,
                });
              } else {
                dispatch(changeCategoryAction(item));
                navigation.navigate('filtering_screen');
              }
            }}
            style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.text}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <>
            {route.params.selectedCategory.text !== 'Tüm Kategoriler' && (
              <>
                <CustomButton
                  onPress={() => {
                    dispatch(
                      changeCategoryAction(route.params.selectedCategory),
                    );
                    navigation.navigate('filtering_screen');
                  }}
                  containerStyle={styles.bottomButton}
                  textColor="#ffffff"
                  color={COLORS.mainGreen}
                  text={`${route.params.selectedCategory.text}'de Ara`}
                />
                <BottomDivider />
              </>
            )}
          </>
        }
      />
    </View>
  );
};

export default FilteringDeepCategoryScreen;
