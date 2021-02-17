import {RouteProp} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomCheckbox from '../../../../components/micro-components/Controls/CustomCheckbox/CustomCheckbox';
import BottomDivider from '../../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import {
  changeBrandsAction,
  clearBrandsAction,
} from '../../../../store/actions/filtering.actions';
import {RootState} from '../../../../store/reducers';
import {ICategoryItem} from '../../../../types/ICategory.type';
import {styles} from './FilteringBrandsScreen.styles';

type FilteringStackParamList = {
  filtering_screen: undefined;
  filtering_deep_category_screen: {
    selectedCategory: ICategoryItem;
    categories: ICategoryItem[];
  };
  filtering_brands_screen: undefined;
  filtering_stores_screen: undefined;
};

const FilteringBrandsScreen: React.FC<{
  navigation: StackNavigationProp<
    FilteringStackParamList,
    'filtering_deep_category_screen'
  >;
  route: RouteProp<FilteringStackParamList, 'filtering_brands_screen'>;
}> = ({navigation}) => {
  const dispatch = useDispatch();
  const selectedBrands = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus.brands,
  );
  const availableBrands = useSelector(
    (state: RootState) => state.FilteringReducer.availableBrands,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      clearButtonFunction: () => {
        dispatch(clearBrandsAction());
        navigation.navigate('filtering_screen');
      },
    } as Partial<StackNavigationOptions & {clearButtonFunction: () => any}>);
  }, [navigation, dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        style={globalStyles.marginTopTwenty}
        data={availableBrands}
        keyExtractor={(item) => item.slug}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <CustomCheckbox
              text={item.name}
              value={
                selectedBrands.findIndex(
                  (brand) => brand.slug === item.slug,
                ) !== -1
              }
              onValueChange={(val) => dispatch(changeBrandsAction(item, val))}
              textStyle={styles.itemText}
              containerStyle={globalStyles.marginLeftTen}
            />
          </View>
        )}
        ListFooterComponent={
          <>
            <CustomButton
              onPress={() => navigation.navigate('filtering_screen')}
              containerStyle={styles.bottomButton}
              textColor="#ffffff"
              color={COLORS.mainGreen}
              text="Uygula"
            />
            <BottomDivider />
          </>
        }
      />
    </View>
  );
};

export default FilteringBrandsScreen;
