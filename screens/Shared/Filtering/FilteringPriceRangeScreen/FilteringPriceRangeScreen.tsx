import React, {useLayoutEffect} from 'react';
import {InputItem} from '@ant-design/react-native';
import {RouteProp} from '@react-navigation/native';
import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../../../assets/colors';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import BottomDivider from '../../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import {RootState} from '../../../../store/reducers';
import {ICategoryItem} from '../../../../types/ICategory.type';
import {styles} from './FilteringPriceRangeScreen.styles';
import {changePriceRangeAction} from '../../../../store/actions/filtering.actions';

type FilteringStackParamList = {
  filtering_screen: undefined;
  filtering_deep_category_screen: {
    selectedCategory: ICategoryItem;
    categories: ICategoryItem[];
  };
  filtering_brands_screen: undefined;
  filtering_stores_screen: undefined;
  filtering_price_range_screen: undefined;
};

const FilteringPriceRangeScreen: React.FC<{
  navigation: StackNavigationProp<
    FilteringStackParamList,
    'filtering_deep_category_screen'
  >;
  route: RouteProp<FilteringStackParamList, 'filtering_price_range_screen'>;
}> = ({navigation}) => {
  const dispatch = useDispatch();
  const priceRange = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus.priceRange,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      clearButtonFunction: () => {
        dispatch(changePriceRangeAction(null, null));
        navigation.navigate('filtering_screen');
      },
    } as Partial<StackNavigationOptions & {clearButtonFunction: () => any}>);
  }, [navigation, dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <InputItem
          clear
          error={false}
          type="number"
          value={priceRange.startingPrice ? priceRange.startingPrice : ''}
          onChange={(value) => {
            dispatch(
              changePriceRangeAction(
                value === '' ? null : value,
                priceRange.endingPrice,
              ),
            );
          }}
          placeholder="En Az"
        />
      </View>
      <View style={styles.inputContainer}>
        <InputItem
          clear
          error={false}
          type="number"
          value={priceRange.endingPrice ? priceRange.endingPrice : ''}
          onChange={(value) => {
            dispatch(
              changePriceRangeAction(
                priceRange.startingPrice,
                value === '' ? null : value,
              ),
            );
          }}
          placeholder="En Fazla"
        />
      </View>
      <CustomButton
        onPress={() => navigation.navigate('filtering_screen')}
        containerStyle={styles.bottomButton}
        textColor="#ffffff"
        color={COLORS.mainGreen}
        text="Uygula"
      />
      <BottomDivider />
    </View>
  );
};

export default FilteringPriceRangeScreen;
