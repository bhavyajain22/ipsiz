import React from 'react';
import {View, Animated} from 'react-native';
import {styles} from './HalScreen.styles';
import HalSlidersCarousel from './HalSlidersCarousel/HalSlidersCarousel';
import CategoryHorizontalScroll from '../../../components/CategoryHorizontalScroll/CategoryHorizontalScroll';
import {globalStyles} from '../../../assets/globalStyles.styles';
import SideCard from '../../../components/SideCard/SideCard';
import HeaderTypo from '../../../components/micro-components/Typography/HeaderTypo/HeaderTypo';
import IconCircle from '../../../components/IconCircle/IconCircle';
import HalPopularProducts from './HalPopularProducts/HalPopularProducts';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import HalRecentStores from './HalRecentStores/HalRecentStores';
import HalRecentProducts from './HalRecentProducts/HalRecentProducts';
import HalCategoryShowcase from './HalCategoryShowcase/HalCategoryShowcase';
import HalHTMLContents from './HalHTMLContents/HalHTMLContents';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {convertAppType} from '../../../store/actions/app.actions';
import {RootState} from '../../../store/reducers';
import CustomHeaderSearch from '../../../navigation/CustomHeaderSearch/CustomHeaderSearch';
import {StackHeaderProps} from '@react-navigation/stack';
import {useCollapsibleHeader} from 'react-navigation-collapsible';
import HalMiddleSlider from './HalMiddleSlider/HalMiddleSlider';
import HalWideBanner from './HalWideBanner/HalWideBanner';

const options = {
  navigationOptions: {
    header: (props: StackHeaderProps) => <CustomHeaderSearch {...props} />,
  },
};

const HalScreen = () => {
  const dispatch = useDispatch();
  const selectedAppState = useSelector(
    (state: RootState) => state.AppReducer.selectedAppState,
  );

  useFocusEffect(() => {
    if (selectedAppState !== 'hal') {
      dispatch(convertAppType('hal'));
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
          ...styles.scrollContentContainerStyle,
          paddingTop: containerPaddingTop,
        }}>
        <View style={styles.carouselContainer}>
          <HalSlidersCarousel />
        </View>
        {/* CATEGORY SCROLL */}
        <View style={globalStyles.marginTopTen}>
          <CategoryHorizontalScroll />
        </View>
        {/* HAFTANIN KACMAZLARI */}
        <View style={globalStyles.marginTopTwenty}>
          <SideCard>
            <View style={styles.cardHeaderContainer}>
              <IconCircle iconName="bell" containerColor="#5c6c81" />
              <HeaderTypo
                textStyle={globalStyles.marginLeftTen}
                text="Öne Çıkanlar"
              />
            </View>
            <HalPopularProducts />
          </SideCard>
        </View>
        {/* MIDDLE SLIDER */}
        <View style={globalStyles.marginTopTen}>
          <HalMiddleSlider />
        </View>
        {/* YENI SATICILAR */}
        <View style={globalStyles.marginTopTen}>
          <SideCard>
            <View style={styles.cardHeaderContainer}>
              <IconCircle iconName="star" containerColor="#5c6c81" />
              <HeaderTypo
                textStyle={globalStyles.marginLeftTen}
                text="Yeni Satıcılar"
              />
            </View>
            <HalRecentStores />
          </SideCard>
        </View>
        {/* WIDE BANNER */}
        <View style={globalStyles.marginTopTen}>
          <HalWideBanner />
        </View>
        {/* SON EKLENEN ÜRÜNLER */}
        <View style={globalStyles.marginTopTen}>
          <SideCard>
            <View style={styles.cardHeaderContainer}>
              <IconCircle iconName="bells" containerColor="#5c6c81" />
              <HeaderTypo
                textStyle={globalStyles.marginLeftTen}
                text="Son Eklenen Ürünler"
              />
            </View>
            <HalRecentProducts />
          </SideCard>
        </View>
        {/* CATEGORY SHOWCASES */}
        <HalCategoryShowcase />
        <View style={globalStyles.marginTopTen}>
          <SideCard>
            <HalHTMLContents />
          </SideCard>
        </View>
        <BottomDivider />
      </Animated.ScrollView>
    </View>
  );
};

export default HalScreen;
