import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';
import H4Typo from '../../../components/micro-components/Typography/H4Typo/H4Typo';
import SideCard from '../../../components/SideCard/SideCard';
import {changeGlobalFilteringAction} from '../../../store/actions/filtering.actions';
import {styles} from './GlobalSearchModalScreen.styles';
import SingleRecentSearchItem from './SingleRecentSearchItem/SingleRecentSearchItem';
import SingleSearchItem from './SingleSearchItem/SingleSearchItem';
import {RootStackParamList} from '../../../types/navigation-types/stack-types/root-stack.type';
import {popularSearches} from '../../../assets/data/popular-search.data';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import {keyboardDismissOnScroll} from '../../../utility/keyboard-dismiss-on-scroll';
import {RootState} from '../../../store/reducers';
import {addRecentSearch} from '../../../store/actions/recent-searches.actions';

const GlobalSearchModalScreen: React.FC<{
  navigation: StackNavigationProp<
    RootStackParamList,
    'global_search_modal_screen'
  >;
}> = ({navigation}) => {
  const dispatch = useDispatch();
  const textInputRef = useRef<any>(null);
  const filteringStatus = useSelector(
    (state: RootState) => state.FilteringReducer.filteringStatus,
  );
  const recentSearches = useSelector(
    (state: RootState) => state.RecentSearchesReducer.recentSearches,
  );

  useEffect(() => {
    setTimeout(() => {
      textInputRef.current?.focus();
    }, 300);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.inputIcon}
          onPress={() => (navigation.canGoBack() ? navigation.goBack() : null)}>
          <FontAwesome5
            name="chevron-left"
            size={20}
            color={COLORS.mainDark}
          />
        </TouchableOpacity>
        <TextInput
          ref={textInputRef}
          defaultValue={filteringStatus.globalSearch || ''}
          placeholder="Marka, Ürün veya Kategori Ara..."
          style={styles.inputStyle}
          onSubmitEditing={(e) => {
            dispatch(addRecentSearch(e.nativeEvent.text));
            dispatch(changeGlobalFilteringAction(e.nativeEvent.text));
            navigation.replace('search_stack');
          }}
        />
      </View>
      <ScrollView {...keyboardDismissOnScroll}>
        <View>
          <H4Typo text="Popüler Aramalar" textStyle={globalStyles.paddingTen} />
          <ScrollView
            {...keyboardDismissOnScroll}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={globalStyles.paddingTen}>
            {popularSearches.map((item, index) => (
              <SingleSearchItem
                key={index}
                searchText={item}
                onPressItem={(searchText) => {
                  dispatch(addRecentSearch(searchText));
                  dispatch(changeGlobalFilteringAction(searchText));
                  navigation.replace('search_stack');
                }}
              />
            ))}
          </ScrollView>
        </View>
        <H4Typo text="Geçmiş Aramalarım" textStyle={globalStyles.paddingTen} />
        {recentSearches.length ? (
          <SideCard containerStyle={styles.sideCard}>
            {recentSearches.map((item, index) => (
              <SingleRecentSearchItem
                key={index}
                searchText={item}
                // eslint-disable-next-line react-native/no-inline-styles
                containerStyle={{
                  borderBottomWidth:
                    index === recentSearches.length - 1 ? 0 : 1,
                }}
                onPressItem={(searchText) => {
                  dispatch(addRecentSearch(searchText));
                  dispatch(changeGlobalFilteringAction(searchText));
                  navigation.replace('search_stack');
                }}
              />
            ))}
          </SideCard>
        ) : null}

        <BottomDivider />
      </ScrollView>
    </View>
  );
};

export default GlobalSearchModalScreen;
