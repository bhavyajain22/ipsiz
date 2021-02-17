import React, {useLayoutEffect} from 'react';
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
import {styles} from './FilteringRatingScreen.styles';
import CustomComponentLabeledCheckbox from '../../../../components/micro-components/Controls/CustomComponentLabeledCheckbox/CustomComponentLabeledCheckbox';
import {
  changeScoresAction,
  clearScoresAction,
} from '../../../../store/actions/filtering.actions';
import { FontAwesome5 } from '@expo/vector-icons';

type FilteringStackParamList = {
  filtering_screen: undefined;
  filtering_deep_category_screen: {
    selectedCategory: ICategoryItem;
    categories: ICategoryItem[];
  };
  filtering_brands_screen: undefined;
  filtering_stores_screen: undefined;
  filtering_price_range_screen: undefined;
  filtering_rating_screen: undefined;
};

const RatingLabelComponent: React.FC<{starCount: number}> = ({starCount}) => (
  <View style={styles.starsContainer}>
    {Array(starCount)
      .fill(null)
      .map((_, index) => (
        <FontAwesome5 key={index} name="star" solid size={25} color="#FAEE1C" />
      ))}
  </View>
);

const FilteringRatingScreen: React.FC<{
  navigation: StackNavigationProp<
    FilteringStackParamList,
    'filtering_deep_category_screen'
  >;
  route: RouteProp<FilteringStackParamList, 'filtering_price_range_screen'>;
}> = ({navigation}) => {
  const dispatch = useDispatch();
  const ratings = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus.ratings,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      clearButtonFunction: () => {
        dispatch(clearScoresAction());
        navigation.navigate('filtering_screen');
      },
    } as Partial<StackNavigationOptions & {clearButtonFunction: () => any}>);
  }, [navigation, dispatch]);

  return (
    <View style={styles.container}>
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <View key={index} style={styles.checkboxContainer}>
            <CustomComponentLabeledCheckbox
              component={<RatingLabelComponent starCount={5 - index} />}
              value={ratings.includes((5 - index).toString())}
              onValueChange={(val) => {
                dispatch(changeScoresAction((5 - index).toString(), val));
              }}
            />
          </View>
        ))}

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

export default FilteringRatingScreen;
