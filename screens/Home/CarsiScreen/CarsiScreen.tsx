import React from 'react';
import {View, Animated} from 'react-native';
import {styles} from './CarsiScreen.styles';
import {StackHeaderProps, StackNavigationProp} from '@react-navigation/stack';
import CategoryHorizontalScroll from '../../../components/CategoryHorizontalScroll/CategoryHorizontalScroll';
import SideCard from '../../../components/SideCard/SideCard';
import IconCircle from '../../../components/IconCircle/IconCircle';
import HeaderTypo from '../../../components/micro-components/Typography/HeaderTypo/HeaderTypo';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import BrandCategories from './BrandCategories/BrandCategories';
import SlidersCarousel from './SlidersCarousel/SlidersCarousel';
import BannersCarousel from './BannersCarousel/BannersCarousel';
import WeeklyPromos from './WeeklyPromos/WeeklyPromos';
import PopularProducts from './PopularProducts/PopularProducts';
import MostlyViewedProducts from './MostlyViewedProducts/MostlyViewedProducts';
import PromoProducts from './PromoProducts/PromoProducts';
import BestSellerCategories from './BestSellerCategories/BestSellerCategories';
import UnbelievableDiscountedProducts from './UnbelievableDiscountedProducts/UnbelievableDiscountedProducts';
import {COLORS} from '../../../assets/colors';
import {useFocusEffect} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {convertAppType} from '../../../store/actions/app.actions';
import {RootState} from '../../../store/reducers';
import {useCollapsibleHeader} from 'react-navigation-collapsible';
import CustomHeaderSearch from '../../../navigation/CustomHeaderSearch/CustomHeaderSearch';
import MidBannersCarousel from './MidBannersCarousel/MidBannersCarousel';
import {globalStyles} from '../../../assets/globalStyles.styles';

type HomeStackParamList = {
  carsi_screen: undefined;
  hal_screen: undefined;
  pazar_screen: undefined;
};

const options = {
  navigationOptions: {
    header: (props: StackHeaderProps) => <CustomHeaderSearch {...props} />,
  },
};

const CarsiScreen: React.FC<StackNavigationProp<
  HomeStackParamList,
  'carsi_screen'
>> = () => {
  const dispatch = useDispatch();
  const selectedAppState = useSelector(
    (state: RootState) => state.AppReducer.selectedAppState,
  );

  useFocusEffect(() => {
    if (selectedAppState !== 'carsi') {
      dispatch(convertAppType('carsi'));
    }
  });

  const {
    onScroll /* Event handler */,
    containerPaddingTop /* number */,
    scrollIndicatorInsetTop /* number */,
  } = useCollapsibleHeader(options);

  return (
    <>
      <View style={styles.mainContainer}>
        <Animated.ScrollView
          onScroll={onScroll}
          scrollIndicatorInsets={{top: scrollIndicatorInsetTop}}
          contentContainerStyle={{
            ...styles.scrollContentContainerStyle,
            paddingTop: containerPaddingTop,
          }}>
          {/* SLIDERS CAROUSEL */}
          <View style={styles.carouselContainer}>
            <SlidersCarousel />
          </View>
          {/* CATEGORY SCROLL */}
          <View style={globalStyles.marginTopTen}>
            <CategoryHorizontalScroll />
          </View>
          {/* HAFTANIN KACMAZLARI */}
          <View style={globalStyles.marginTopTen}>
              <View style={styles.cardHeaderContainer}>
                <HeaderTypo
                  textStyle={styles.marginLeftTen}
                  text="Haftanın Kaçmazı"
                />
              </View>
              <WeeklyPromos />
          </View>
          {/* BANNERS CAROUSEL */}
          <View style={styles.secondCarouselContainer}>
            <BannersCarousel />
          </View>
          {/* POPULER URUNLER */}
          <View style={globalStyles.marginTopTen}>
            <SideCard>
              <View style={styles.cardHeaderContainer}>
                <IconCircle iconName="star" containerColor={COLORS.mainGreen} />
                <HeaderTypo
                  textStyle={styles.marginLeftTen}
                  text="Popüler Ürünler"
                />
              </View>
              <PopularProducts />
            </SideCard>
          </View>
          {/* MID BANNERS */}
          <View style={globalStyles.marginTopTen}>
            <MidBannersCarousel />
          </View>
          {/* EN COK GORUNTULENENLER */}
          <View style={globalStyles.marginTopTen}>
            <SideCard>
              <View style={styles.cardHeaderContainer}>
                <IconCircle iconName="eye" containerColor={COLORS.mainGreen} />
                <HeaderTypo
                  textStyle={styles.marginLeftTen}
                  text="En Çok Görüntülenenler"
                />
              </View>
              <MostlyViewedProducts />
            </SideCard>
          </View>
          {/* COK SATANLAR */}
          <View style={globalStyles.marginTopTen}>
            <SideCard>
              <View style={styles.cardHeaderContainer}>
                <IconCircle iconName="star" containerColor={COLORS.mainGreen} />
                <HeaderTypo
                  textStyle={styles.marginLeftTen}
                  text="Çok Satanlar"
                />
              </View>
              <BestSellerCategories />
            </SideCard>
          </View>
          {/* KAMPANYALI ÜRÜNLER */}
          <View style={globalStyles.marginTopTen}>
            <SideCard>
              <View style={styles.cardHeaderContainer}>
                <IconCircle
                  iconName="bullhorn"
                  containerColor={COLORS.mainGreen}
                />
                <HeaderTypo
                  textStyle={styles.marginLeftTen}
                  text="Kampanyalı Ürünler"
                />
              </View>
              <PromoProducts />
            </SideCard>
          </View>
          {/* INANILMAZ INDIRIMLER */}
          <View style={globalStyles.marginTopTen}>
            <SideCard>
              <View style={styles.cardHeaderContainer}>
                <IconCircle iconName="tag" containerColor={COLORS.mainGreen} />
                <HeaderTypo
                  textStyle={styles.marginLeftTen}
                  text="İnanılmaz İndirimler"
                />
              </View>

              <UnbelievableDiscountedProducts />
            </SideCard>
          </View>
          {/* MARKA SECTION */}
          <View style={globalStyles.marginTopTen}>
            <SideCard>
              <BrandCategories />
            </SideCard>
          </View>
          <BottomDivider />
        </Animated.ScrollView>
      </View>
    </>
  );
};

export default CarsiScreen;
