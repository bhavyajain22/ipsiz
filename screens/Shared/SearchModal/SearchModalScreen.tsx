import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Animated,
} from 'react-native';
import {styles} from './SearchModalScreen.styles';
import {StackNavigationProp} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import SortingModal from './SortingModal/SortingModal';
import SingleProductRegular from '../../../components/shared/SingleProductRegular/SingleProductRegular';
import SingleProductHal from '../../../components/shared/SingleProductHal/SingleProductHal';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/reducers';
import {getCarsiAvailableProductsAction} from '../../../store/actions/filtering.actions';
import {COLORS} from '../../../assets/colors';
import {ICategoryItem} from '../../../types/ICategory.type';
import {
  IHalProduct,
  IPazarProduct,
  IProductRegular,
} from '../../../types/IProductRegular.type';
import SingleProductPazar from '../../../components/shared/SingleProductPazar/SingleProductPazar';
import {
  CollapsibleSubHeaderAnimator,
  useCollapsibleSubHeader,
} from 'react-navigation-collapsible';
import {globalStyles} from '../../../assets/globalStyles.styles';

type MainStackParamList = {
  filtering_stack: undefined;
  search_modal_screen: undefined;
  global_search_modal_screen: undefined;
};

const SearchModalScreen: React.FC<{
  navigation: StackNavigationProp<MainStackParamList, 'search_modal_screen'>;
}> = ({navigation}) => {
  const dispatch = useDispatch();
  const [sortingModalOpen, setSortingModalOpen] = useState(false);
  const filteredItemsLoading = useSelector(
    (state: RootState) => state.FilteringReducer.filteredItemsLoading,
  );
  const filteredProducts = useSelector(
    (state: RootState) => state.FilteringReducer.filteredItems,
  );
  const currentTarget = useSelector(
    (state: RootState) => state.FilteringReducer.searchTarget,
  );
  const filteringStatus = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus,
  );
  const currentPage = useSelector(
    (state: RootState) => state.FilteringReducer.currentPage,
  );
  const selectedAppState = useSelector(
    (state: RootState) => state.AppReducer.selectedAppState,
  );

  const {
    onScroll /* Event handler */,
    containerPaddingTop /* number */,
    scrollIndicatorInsetTop /* number */,
    translateY,
  } = useCollapsibleSubHeader();

  const handleScrollEnd = () => {
    // TODO GET CURRENT TARGET STORING CURRENT TARGET IN REDUX
    if (!filteredItemsLoading) {
      dispatch(
        getCarsiAvailableProductsAction({
          target: currentTarget,
          id: (filteringStatus.category as ICategoryItem)?.backendName,
          branch: 'b2c',
          page: currentPage + 1,
          search_key: filteringStatus.globalSearch,
          store: filteringStatus.stores.map((item) => item.slug),
          brand: filteringStatus.brands.map((item) => item.slug),
          score: filteringStatus.ratings,
          priceRange: filteringStatus.priceRange,
          sorting: filteringStatus.sorting,
        }),
      );
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <>
          <CollapsibleSubHeaderAnimator translateY={translateY}>
            <View
              style={{
                ...styles.filteringSortingContainer,
              }}>

              <TouchableOpacity
                onPress={() => navigation.navigate('filtering_stack')}
                style={styles.filteringTouchable}>
                <Icon name="filter" size={20} color={COLORS.mainGreen} />
                <Text style={styles.filteringText}>Filtrele</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (
                    filteringStatus.category ||
                    (filteringStatus.globalSearch &&
                      filteringStatus.globalSearch !== '')
                  ) {
                    setSortingModalOpen(true);
                  }
                }}
                style={styles.sortingTouchable}>
                <Icon name="sort" size={20} color={COLORS.mainGreen} />
                <Text style={styles.sortingText}>Sırala</Text>
              </TouchableOpacity>
            </View>
          </CollapsibleSubHeaderAnimator>

          {selectedAppState === 'carsi' && (
            <Animated.FlatList
              onScroll={onScroll}
              style={globalStyles.zIndexMinus}
              contentContainerStyle={{
                paddingTop: containerPaddingTop,
              }}
              scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
              ListEmptyComponent={<></>}
              onEndReached={handleScrollEnd}
              numColumns={2}
              ListFooterComponent={<View style={styles.bottomDivider} />}
              data={filteredProducts as IProductRegular[]}
              keyExtractor={(item) => item._id}
              renderItem={({item}) => (
                <SingleProductRegular
                  imageStyle={styles.productImage}
                  product={item}
                />
              )}
            />
          )}

          {selectedAppState === 'hal' && (
            <Animated.FlatList
              onScroll={onScroll}
              style={globalStyles.zIndexMinus}
              contentContainerStyle={{
                paddingTop: containerPaddingTop,
              }}
              scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
              ListEmptyComponent={<></>}
              onEndReached={handleScrollEnd}
              numColumns={2}
              ListFooterComponent={<View style={styles.bottomDivider} />}
              data={filteredProducts as IHalProduct[]}
              keyExtractor={(item) => item.title}
              renderItem={({item}) => (
                <SingleProductHal
                  imageStyle={styles.productImage}
                  product={item}
                  containerStyle={{}}
                  imageContainerStyle={{}}
                />
              )}
            />
          )}

          {selectedAppState === 'pazar' && (
            <Animated.FlatList
              onScroll={onScroll}
              style={globalStyles.zIndexMinus}
              contentContainerStyle={{
                paddingTop: containerPaddingTop,
              }}
              scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
              ListEmptyComponent={<></>}
              onEndReached={handleScrollEnd}
              numColumns={2}
              ListFooterComponent={<View style={styles.bottomDivider} />}
              data={filteredProducts as IPazarProduct[]}
              keyExtractor={(item) => item.title}
              renderItem={({item}) => (
                <SingleProductPazar
                  imageStyle={styles.productImage}
                  product={item}
                  containerStyle={{}}
                  imageContainerStyle={{}}
                />
              )}
            />
          )}

          {filteredItemsLoading && (
            <View style={styles.activityIndicatorContainer}>
              <ActivityIndicator size="large" color={COLORS.mainGreen} />
            </View>
          )}
        </>
      </TouchableWithoutFeedback>
      <SortingModal
        onBackdropPress={() => setSortingModalOpen(false)}
        onBackButtonPress={() => setSortingModalOpen(false)}
        hideModalContentWhileAnimating={true}
        useNativeDriver={true}
        isVisible={sortingModalOpen}
        sortingOptions={[
          {value: '0', title: 'Akıllı Sıralama'},
          {value: '1', title: 'Çok Satanlar'},
          {value: '2', title: 'En Yeniler'},
          {value: '3', title: 'Çok Yorumlanan'},
          {value: '4', title: 'Yüksek Puan'},
          {value: '5', title: 'Artan Fiyat'},
          {value: '6', title: 'Azalan Fiyat'},
        ]}
      />
    </>
  );
};

export default SearchModalScreen;
