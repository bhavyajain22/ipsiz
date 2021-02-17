import React from 'react';
import {View, Animated} from 'react-native';
import {styles} from './PazarScreen.styles';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {convertAppType} from '../../../store/actions/app.actions';
import PazarSlidersCarousel from './PazarSlidersCarousel/PazarSlidersCarousel';
import CategoryHorizontalScroll from '../../../components/CategoryHorizontalScroll/CategoryHorizontalScroll';
import {globalStyles} from '../../../assets/globalStyles.styles';
import SideCard from '../../../components/SideCard/SideCard';
import IconCircle from '../../../components/IconCircle/IconCircle';
import {COLORS} from '../../../assets/colors';
import HeaderTypo from '../../../components/micro-components/Typography/HeaderTypo/HeaderTypo';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import {RootState} from '../../../store/reducers';
import PazarTabProducts from './PazarTabProducts/PazarTabProducts';
import PazarBannersCarousel from './PazarBannersCarousel/PazarBannersCarousel';
import PazarPopularProducts from './PazarPopularProducts/PazarPopularProducts';
import PazarLatestAddedProducts from './PazarLatestAddedProducts/PazarLatestAddedProducts';
import PazarLatestAdverts from './PazarLatestAdverts/PazarLatestAdverts';
import {useCollapsibleHeader} from 'react-navigation-collapsible';
import {StackHeaderProps} from '@react-navigation/stack';
import CustomHeaderSearch from '../../../navigation/CustomHeaderSearch/CustomHeaderSearch';
import PazarWideBanner from './PazarWideBanner/PazarWideBanner';
import PazarCategoryShowcase from './PazarCategoryShowcase/PazarCategoryShowcase';

const options = {
  navigationOptions: {
    header: (props: StackHeaderProps) => <CustomHeaderSearch {...props} />,
  },
};

const PazarScreen = () => {
  const dispatch = useDispatch();
  const selectedAppState = useSelector(
    (state: RootState) => state.AppReducer.selectedAppState,
  );

  useFocusEffect(() => {
    if (selectedAppState !== 'pazar') {
      dispatch(convertAppType('pazar'));
    }
  });

  const {
    onScroll /* Event handler */,
    containerPaddingTop /* number */,
    scrollIndicatorInsetTop /* number */,
  } = useCollapsibleHeader(options);

  return (
    <View style={styles.mainContainer}>
      <Animated.ScrollView
        onScroll={onScroll}
        scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
        contentContainerStyle={{
          ...styles.scrollContainerStyle,
          paddingTop: containerPaddingTop,
        }}>
        {/* PAZAR SLIDERS CAROUSEL */}
        <View style={styles.carouselContainer}>
          <PazarSlidersCarousel />
        </View>
        {/* CATEGORY SCROLL */}
        <View style={globalStyles.marginTopTen}>
          <CategoryHorizontalScroll />
        </View>
        {/* PAZAR BANNERS */}
        <View style={globalStyles.marginTopTen}>
          <PazarBannersCarousel />
        </View>
        {/* PAZAR TAB PRODUCTS */}
        <View style={globalStyles.marginTopTen}>
          <PazarTabProducts />
        </View>

        {/* PAZAR WIDE BANNER */}
        <View style={globalStyles.marginTopTen}>
          <PazarWideBanner />
        </View>

        {/* POPULAR PRODUCTS */}
        <View style={globalStyles.marginTopTen}>
          <SideCard>
            <View style={styles.cardHeaderContainer}>
              <IconCircle iconName="bells" containerColor={COLORS.mainPurple} />
              <HeaderTypo
                textStyle={globalStyles.marginLeftTen}
                text="Popüler Ürünler"
              />
            </View>
            <PazarPopularProducts />
          </SideCard>
        </View>

        {/* LATELY ADDED PRODUCTS */}
        <View style={globalStyles.marginTopTen}>
          <SideCard>
            <View style={styles.cardHeaderContainer}>
              <IconCircle iconName="bell" containerColor={COLORS.mainPurple} />
              <HeaderTypo
                textStyle={globalStyles.marginLeftTen}
                text="Son Eklenen Ürünler"
              />
            </View>
            <PazarLatestAddedProducts />
          </SideCard>
        </View>

        <View style={globalStyles.marginTopTen}>
          <SideCard>
            <PazarCategoryShowcase />
          </SideCard>
        </View>

        {/* LATELY ADDED ADVERTS */}
        <View style={globalStyles.marginTopTen}>
          <SideCard>
            <View style={styles.cardHeaderContainer}>
              <IconCircle iconName="bell" containerColor={COLORS.mainPurple} />
              <HeaderTypo
                textStyle={globalStyles.marginLeftTen}
                text="Son Eklenen İlanlar"
              />
            </View>
            <PazarLatestAdverts />
          </SideCard>
        </View>

        <BottomDivider />
      </Animated.ScrollView>
    </View>
  );
};

export default PazarScreen;
