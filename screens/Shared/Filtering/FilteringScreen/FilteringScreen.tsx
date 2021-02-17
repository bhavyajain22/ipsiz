import {
  StackNavigationOptions,
  StackNavigationProp,
} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BottomDivider from '../../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import {RootState} from '../../../../store/reducers';
import {styles} from './FilteringScreen.styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FilteringItemLoadingOverlay from './FilteringItemLoadingOverlay/FilteringItemLoadingOverlay';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import {CompositeNavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../../types/navigation-types/stack-types/root-stack.type';
import {ISearchParamList} from '../../../../types/navigation-types/stack-types/search-stack.types';
import {IFilteringParamList} from '../../../../types/navigation-types/stack-types/filtering-stack.type';
import {convertAppStateToColor} from '../../../../utility/app-state-to-color';
import {CLEAR_ALL_FILTERING} from '../../../../store/types/filtering.types';

type IRootParamList = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'search_stack'>,
  CompositeNavigationProp<
    StackNavigationProp<ISearchParamList, 'filtering_stack'>,
    StackNavigationProp<IFilteringParamList, 'filtering_screen'>
  >
>;

const FilteringScreen: React.FC<{
  navigation: IRootParamList;
}> = ({navigation}) => {
  const dispatch = useDispatch();
  const selectedAppState = useSelector(
    (state: RootState) => state.AppReducer.selectedAppState,
  );
  const categoriesLoading = useSelector(
    (state: RootState) => state.CategoryReducer.categoriesLoading,
  );
  const categories = useSelector(
    (state: RootState) => state.CategoryReducer.categories,
  );
  const selectedCategory = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus.category,
  );
  const globalSearch = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus.globalSearch,
  );
  const selectedBrands = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus.brands,
  );
  const selectedStores = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus.stores,
  );
  const variantsLoading = useSelector(
    (state: RootState) => state.FilteringReducer.variantsLoading,
  );
  const totalPageCount = useSelector(
    (state: RootState) => state.FilteringReducer.totalPageCount,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      clearButtonFunction: () => {
        dispatch({type: CLEAR_ALL_FILTERING});
      },
    } as Partial<StackNavigationOptions & {clearButtonFunction: () => any}>);
  }, [navigation, dispatch]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.touchableContainer}>
          <TouchableOpacity
            disabled={categoriesLoading}
            onPress={() =>
              navigation.navigate('filtering_deep_category_screen', {
                selectedCategory: {
                  id: 'all-categories',
                  backendName: 'all-categories',
                  path: 'Tüm Kategoriler',
                  text: 'Tüm Kategoriler',
                  iconName: 'home',
                  imageUrl: null,
                  children: [],
                },
                categories,
              })
            }>
            {selectedCategory ? (
              <>
                <Text style={styles.itemTextValued}>Kategoriler</Text>
                <Text style={styles.selectedText}>
                  {selectedCategory && selectedCategory.text}
                </Text>
              </>
            ) : (
              <Text style={styles.itemText}>Kategoriler</Text>
            )}
          </TouchableOpacity>
          {categoriesLoading && <FilteringItemLoadingOverlay />}
        </View>
        {(selectedCategory || (globalSearch && globalSearch !== '')) && (
          <>
            <View style={styles.touchableContainer}>
              <TouchableOpacity
                disabled={variantsLoading}
                onPress={() => navigation.navigate('filtering_brands_screen')}>
                {selectedBrands && selectedBrands.length ? (
                  <>
                    <Text style={styles.itemTextValued}>Markalar</Text>
                    <Text style={styles.selectedText}>
                      {selectedBrands.reduce(
                        (prev, curr) => prev + curr.slug + ', ',
                        '',
                      )}
                    </Text>
                  </>
                ) : (
                  <Text style={styles.itemText}>Markalar</Text>
                )}
              </TouchableOpacity>
              {variantsLoading && <FilteringItemLoadingOverlay />}
            </View>
            <View style={styles.touchableContainer}>
              <TouchableOpacity
                disabled={variantsLoading}
                onPress={() => navigation.navigate('filtering_stores_screen')}>
                {selectedStores && selectedStores.length ? (
                  <>
                    <Text style={styles.itemTextValued}>Mağazalar</Text>
                    <Text style={styles.selectedText}>
                      {selectedStores.reduce(
                        (prev, curr) => prev + curr.slug + ', ',
                        '',
                      )}
                    </Text>
                  </>
                ) : (
                  <Text style={styles.itemText}>Mağazalar</Text>
                )}
              </TouchableOpacity>
              {variantsLoading && <FilteringItemLoadingOverlay />}
            </View>

            {selectedAppState !== 'hal' && (
              <View style={styles.touchableContainer}>
                <TouchableOpacity
                  disabled={variantsLoading}
                  onPress={() =>
                    navigation.navigate('filtering_price_range_screen')
                  }>
                  <Text style={styles.itemText}>Fiyat Aralığı</Text>
                </TouchableOpacity>
                {variantsLoading && <FilteringItemLoadingOverlay />}
              </View>
            )}

            <View style={styles.touchableContainer}>
              <TouchableOpacity
                disabled={variantsLoading}
                onPress={() => navigation.navigate('filtering_rating_screen')}>
                <Text style={styles.itemText}>Ürün Puanı</Text>
              </TouchableOpacity>
              {variantsLoading && <FilteringItemLoadingOverlay />}
            </View>
          </>
        )}

        <BottomDivider />
      </ScrollView>
      <CustomButton
        onPress={() => navigation.navigate('search_modal_stack')}
        containerStyle={styles.bottomButton}
        textColor="#ffffff"
        color={convertAppStateToColor(selectedAppState)}
        text={`Ürünleri Gör (${(totalPageCount as number) * 12})`}
      />
    </View>
  );
};

export default FilteringScreen;
