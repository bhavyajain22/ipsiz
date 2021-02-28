import React from 'react';
import {View, Animated,Text,Image,TouchableOpacity,ScrollView, Dimensions} from 'react-native';
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
import {getWeeklyPromos} from '../../../services/carsi.service';
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
import MediumCardRegular from '../../../components/shared/MediumCardRegular/MediumCardRegular';
import ThreeKampanyalarCards from '../../../components/shared/ThreeKampanyalarCards/ThreeKampanyalarCards';

import BigCardRegular from '../../../components/shared/BigCardRegular/BigCardRegular';
import BigCard from './BigCard/BigCard';
import KampaCard from './Kampa/Kampa';
import KacCards from './kacCards/KacCards';
const{width, height} = Dimensions.get('screen')

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

          <BigCard/>
          <BigCard/>
          <BigCard/>
          
            {/* <View >
              <TouchableOpacity style={styles.kampanyalarCards} >
                <ThreeKampanyalarCards />
                </TouchableOpacity>
          </View> */}
          {/* HAFTANIN KACMAZLARI */}
          <View style={styles.chipsMain}>
            <Text style={styles.activateChip}>test1test</Text>
            <Text style={styles.disableChip}>test1</Text>
            <Text style={styles.disableChip}>test1</Text>
            <Text style={styles.disableChip}>test1 test1</Text>
          </View>

          <View style={styles.threeCards}>
            <TouchableOpacity >
              <Image resizeMode='contain' style={styles.threeSmallCard} source={require('../../../assets/images/threeCard.png')} />
            </TouchableOpacity>
            <TouchableOpacity >
              <Image resizeMode='contain' style={styles.threeSmallCard} source={require('../../../assets/images/threeCard.png')} />
            </TouchableOpacity>           
            <TouchableOpacity >
              <Image resizeMode='contain' style={styles.threeSmallCard} source={require('../../../assets/images/threeCard.png')} />
            </TouchableOpacity>
          </View>
          <KampaCard/>
          <KampaCard/>
          <KampaCard/>
          <View style={globalStyles.marginTopTen}>
              <View style={styles.cardHeaderContainer}>
                <HeaderTypo
                  textStyle={styles.marginLeftTen}
                  text="Haftanın Kaçmazı"
                />
              </View>
              <WeeklyPromos />
          </View>

          <View style={styles.chipsMain}>
            <Text style={styles.activateChip}>test1test</Text>
            <Text style={styles.disableChip}>test1</Text>
            <Text style={styles.disableChip}>test1</Text>
            <Text style={styles.disableChip}>test1 test1</Text>
          </View>
          {/*Cok card*/}
          <View style={{ borderColor:'#c7c7c7',backgroundColor:'white', flex:1,flexDirection:'row', justifyContent:'space-evenly'}}>
            <View style={{flex:0.355, alignSelf:'flex-start'}}>
              <Image  resizeMode='contain' style={{width:141, height:213}} source={require('../../../assets/images/phone.png')} />
            </View>
            <View style={{flex:0.3, backgroundColor:'white',alignItems:'center', flexDirection:'column', borderRadius:12,borderColor:'#E6E6E6',borderWidth:2}}>
              <Text style={{fontFamily:'Quicksand-Light',fontSize:14, textAlign:'center'}} >Masaüstü Bilgisayar</Text>
              <Image  resizeMode='contain' style={{width:108,height:134, marginTop:10}} source={require('../../../assets/images/locker.png')}></Image>
              <Text style={{fontSize:10,fontFamily:'Quicksand-Light', color:'#35b257', textAlign:'center',position:'absolute',marginTop:170}}>En Uygun{'\n'} Fiyatlarla!</Text>
            </View>
            <View style={{flex:0.3, backgroundColor:'white',alignItems:'center', flexDirection:'column', borderRadius:7,borderColor:'#E6E6E6',borderWidth:2}}>
            <Text style={{fontFamily:'Quicksand-Light',fontSize:14, textAlign:'center'}} >Fotoğraf & Kamera</Text>
              <Image  resizeMode='contain' style={{width:108,height:134, marginTop:10}} source={require('../../../assets/images/camera.png')}></Image>
              <Text style={{fontSize:10,fontFamily:'Quicksand-Light', color:'#35b257', textAlign:'center', marginTop:170,position:'absolute'}}>En Uygun {'\n'} Fiyatlarla!</Text>

            </View>
          </View>
          <View style={{flexDirection:'row'}}>
          <KacCards/>
          <KacCards/>
          </View>
          <View style={{flexDirection:'row'}}>
          <KacCards/>
          <KacCards/>
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
              <Text>asdasd</Text>
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
          {/*}	
          <View style ={styles.twoCards}>
            <TouchableOpacity ><MediumCardRegular/></TouchableOpacity>
            <TouchableOpacity><MediumCardRegular/></TouchableOpacity>
        </View>*/}

            <View style={styles.scrollCard}>
            <TouchableOpacity >
              <Image resizeMode='contain' style = {styles.singleCard} source={require('../../../assets/images/laptop.png')}/>
            </TouchableOpacity>
          </View>
          <BottomDivider />
        </Animated.ScrollView>
      </View>
    
  );
};

export default CarsiScreen;
