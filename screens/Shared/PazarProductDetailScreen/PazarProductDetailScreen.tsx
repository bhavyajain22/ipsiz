import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  Share,
  TouchableOpacity,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';
import CustomCarousel from '../../../components/CustomCarousel/CustomCarousel';
import IconCircle from '../../../components/IconCircle/IconCircle';
import CountSelector from '../../../components/micro-components/Controls/CountSelector/CountSelector';
import CustomButton from '../../../components/micro-components/Controls/CustomButton/CustomButton';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import ScrollDivider from '../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import CustomModal from '../../../components/micro-components/Modal/CustomModal/CustomModal';
import StarRating from '../../../components/micro-components/StarRating/StarRating';
import DescriptionTypo from '../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../components/micro-components/Typography/H2Typo/H2Typo';
import HeaderTypo from '../../../components/micro-components/Typography/HeaderTypo/HeaderTypo';
import PriceTypo from '../../../components/micro-components/Typography/PriceTypo/PriceTypo';
import SmallTypo from '../../../components/micro-components/Typography/SmallTypo/SmallTypo';
import SingleProductPazar from '../../../components/shared/SingleProductPazar/SingleProductPazar';
import SideCard from '../../../components/SideCard/SideCard';
import {
  getProductDetails,
  getRefundmentInfo,
  getSimilarProducts,
} from '../../../services/product-detail.service';
import {
  IProductDetailed,
  ISingleProductComment,
  ISingleQA,
} from '../../../types/IProductDetailed.type';
import {IPazarProduct} from '../../../types/IProductRegular.type';
import {HomeStackParamList} from '../../../types/navigation-types/stack-types/home-stack.type';
import {RootStackParamList} from '../../../types/navigation-types/stack-types/root-stack.type';
import {MainTabParamList} from '../../../types/navigation-types/tab-types/main-tab.type';
import AskAboutProductContent from '../ProductDetailSharedScreens/AskAboutProductContent/AskAboutProductContent';
import PazarAboutProductContent from './PazarAboutProductContent/PazarAboutProductContent';
import PazarAboutProductView from './PazarAboutProductView/PazarAboutProductView';
import PazarCommentView from './PazarCommentView/PazarCommentView';
import PazarComplaintContent from './PazarComplaintContent/PazarComplaintContent';
import PazarFeaturesView from './PazarFeaturesView/PazarFeaturesView';
import PazarOrderButtonGroup from './PazarOrderButtonGroup/PazarOrderButtonGroup';
import {styles} from './PazarProductDetailScreen.styles';
import PazarProductDetailsSkeleton from './PazarProductDetailsSkeleton/ProductDetailsSkeleton';
import PazarStockView from './PazarStockView/PazarStockView';

type IPazarProductDetailsHomeNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'tab_stack'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'home_stack'>,
    StackNavigationProp<HomeStackParamList, 'pazar_product_detail_screen'>
  >
>;

type IPazarProductDetailsRootNav = StackNavigationProp<
  RootStackParamList,
  'pazar_product_detail_screen'
>;

const PazarProductDetailScreen: React.FC<{
  navigation: IPazarProductDetailsHomeNav | IPazarProductDetailsRootNav;
  route:
    | RouteProp<RootStackParamList, 'pazar_product_detail_screen'>
    | RouteProp<HomeStackParamList, 'pazar_product_detail_screen'>;
}> = ({route}) => {
  const [productLoading, setProductLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProductDetailed | null>(null);
  const [similarAndOtherProducts, setSimilarAndOtherProducts] = useState<{
    similarProducts: IPazarProduct[];
  }>({similarProducts: []});
  const [itemCount, setItemCount] = useState<number>(1);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [complaintModalVisible, setComplaintModalVisible] = useState<boolean>(
    false,
  );
  const [aboutFocusedTab, setAboutFocusedTab] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [imagesZoomViewerModalOpen, setImagesZoomViewerModalOpen] = useState<
    boolean
  >(false);
  const [refundmentDetails, setRefundmentDetails] = useState<string>('');
  const [
    askAboutProductModalVisible,
    setAskAboutProductModalVisible,
  ] = useState<boolean>(false);

  useEffect(() => {
    setProductLoading(true);
    getProductDetails(route.params.id)
      .then(({data: {result}}) => {
        setProduct(result);
        console.log(result);
      })
      .catch((e) => console.log(e))
      .finally(() => setProductLoading(false));

    Promise.all([
      getSimilarProducts(route.params.id),
      getRefundmentInfo(route.params.id),
    ]).then((res) => {
      const [similarProducts, refundmentInfo] = res.map((i) => i.data);
      setSimilarAndOtherProducts({
        similarProducts: (similarProducts as unknown) as IPazarProduct[],
      });
      setRefundmentDetails(refundmentInfo as string);
    });
  }, [route.params.id]);

  return (
    <>
      {!productLoading ? (
        <ScrollView stickyHeaderIndices={[3]} style={styles.mainContainer}>
          {/* MAIN CONTAINER */}
          <View style={styles.firstContainer}>
            <View style={globalStyles.relativePos}>
              <CustomCarousel
                data={product?.images.map((item) => item.detailImage)}
                renderItem={({item}) => (
                  <TouchableOpacity
                    key={item}
                    style={styles.carouselItem}
                    onPress={() => setImagesZoomViewerModalOpen(true)}>
                    <Image
                      source={{
                        uri: item,
                      }}
                      style={styles.carouselSingleItem}
                    />
                  </TouchableOpacity>
                )}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width}
                vertical={false}
              />
              <TouchableOpacity style={styles.addToFavoriteButton}>
                <FontAwesome5
                  name="heart"
                  light
                  size={20}
                  color={COLORS.mainGreen}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.addToAlarmButton}>
                <FontAwesome5
                  name="alarm-clock"
                  light
                  size={20}
                  color={COLORS.mainPurple}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Share.share({message: product?.url as string})}
                style={styles.shareButton}>
                <FontAwesome5
                  name="share-alt"
                  light
                  size={20}
                  color={COLORS.mainDark}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.itemHeaderContainer}>
              <H2Typo
                text={
                  (route.params as {productName: string; id: string})
                    .productName
                }
              />
              <View style={styles.productExplanationContainer}>
                <View>
                  <StarRating
                    rating={(product?.productScore as unknown) as number}
                    reviewCount={100}
                    containerStyle={globalStyles.marginTopTen}
                  />
                  <PriceTypo
                    oldPrice={product?.price}
                    price={(product?.salePrice as unknown) as string}
                    containerStyle={globalStyles.marginTopTen}
                  />
                </View>
                <View style={globalStyles.alignItemsEnd}>
                  <View style={globalStyles.flexRow}>
                    <FontAwesome5
                      name="eye"
                      light
                      size={20}
                      color={COLORS.mainGreen}
                    />
                    <SmallTypo
                      text={product?.dailyHit + ' Kişi Görüntüledi'}
                      textStyle={globalStyles.marginLeftTen}
                    />
                  </View>
                  <View
                    style={{
                      ...globalStyles.alignItemsEnd,
                      ...globalStyles.marginTopTen,
                    }}>
                    {product?.isDiscountExists && (
                      <View style={styles.percentageStatusContainer}>
                        <Text style={styles.percentageText}>
                          {product.discountRate}%
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* COUNTER CONTAINER */}
          <View style={styles.secondContainer}>
            <PazarStockView count={(product?.stock as unknown) as number} />
            <CountSelector
              count={itemCount}
              onDecrement={() => setItemCount((prev) => prev - 1)}
              onIncrement={() => setItemCount((prev) => prev + 1)}
              maxCount={(product?.stock as unknown) as number}
            />
          </View>

          {/* FEATURES CONTAINER */}
          {product?.shippingDetail?.shippingTime ? (
            <View style={styles.thirdContainer}>
              <PazarFeaturesView
                features={[
                  ...(product?.shippingDetail?.fastShipping
                    ? ['fast-delivery']
                    : []),
                  ...(product?.shippingDetail?.freeShipping
                    ? ['free-delivery']
                    : []),
                  ...(product?.shippingDetail?.sameDayShipping
                    ? ['today-delivery']
                    : []),
                ]}
              />

              <View
                style={{
                  ...globalStyles.flexRow,
                  ...globalStyles.justifyContentCenter,
                }}>
                <DescriptionTypo text="En Geç " />
                <DescriptionTypo
                  text={`${product?.shippingDetail?.shippingTime} `}
                  textStyle={{color: COLORS.mainPurple}}
                />
                <DescriptionTypo text="Kargoya Verilir" />
              </View>
            </View>
          ) : (
            <View />
          )}

          {/* BUY BUTTONS CONTAINER */}
          <View style={styles.fifthContainer}>
            <PazarOrderButtonGroup
              buttonType={product?.canAddBasket ? 'order' : 'message'}
              handleAddToCartClicked={console.log}
              handleBuyImmediatelyClicked={console.log}
            />
          </View>

          {/* ABOUT PRODUCT CONTAINER */}
          <View style={styles.sixthContainer}>
            <PazarAboutProductView
              handlePress={(focusedTab) => {
                setAboutFocusedTab(focusedTab);
                setDetailModalVisible(true);
              }}
            />
          </View>

          {/* COMMENT CONTAINER */}
          <View style={styles.seventhContainer}>
            <PazarCommentView
              comments={
                (product?.comments as unknown) as ISingleProductComment[]
              }
              seeAllClicked={() => setDetailModalVisible(true)}
            />
          </View>

          <View style={globalStyles.zIndexZero}>
            <SideCard containerStyle={styles.sideCardStyle}>
              <View style={styles.cardHeaderContainer}>
                <IconCircle
                  iconName="bell"
                  containerColor={COLORS.mainPurple}
                />
                <HeaderTypo
                  textStyle={globalStyles.marginLeftTen}
                  text="Benzer Ürünler"
                />
              </View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.flatListContainer}
                style={globalStyles.marginTopTen}
                data={similarAndOtherProducts.similarProducts}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <ScrollDivider />}
                renderItem={({item, index}) => (
                  <SingleProductPazar
                    product={item}
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyle={{
                      marginRight:
                        index ===
                        similarAndOtherProducts.similarProducts.length - 1
                          ? 20
                          : 0,
                    }}
                    imageContainerStyle={{}}
                    imageStyle={{}}
                  />
                )}
              />
            </SideCard>
          </View>

          <View style={styles.ninethContainer}>
            <View style={styles.complaintButtonContainer}>
              <CustomButton
                onPress={() => setAskAboutProductModalVisible(true)}
                text="Ürün Hakkında Soru Sor"
                color={COLORS.mainGreen}
                textColor={COLORS.mainGreen}
                // eslint-disable-next-line react-native/no-inline-styles
                textStyle={{fontSize: 15}}
                outlined
              />
            </View>
          </View>

          <View style={styles.ninethContainer}>
            <View style={styles.complaintButtonContainer}>
              <CustomButton
                onPress={() => setComplaintModalVisible(true)}
                text="Şikayet Et"
                color="#e87e44"
                textColor="#e87e44"
                // eslint-disable-next-line react-native/no-inline-styles
                textStyle={{fontSize: 15}}
                outlined
              />
            </View>
          </View>

          <BottomDivider />
        </ScrollView>
      ) : (
        <PazarProductDetailsSkeleton />
      )}

      <CustomModal
        headerTitle={
          (route.params as {productName: string; id: string}).productName
            .length > 30
            ? `${(route.params as {
                productName: string;
                id: string;
              }).productName.slice(0, 30)}...`
            : (route.params as {productName: string; id: string}).productName
        }
        isVisible={detailModalVisible}
        onBackButtonPress={() => setDetailModalVisible(false)}
        onClose={() => setDetailModalVisible(false)}>
        <PazarAboutProductContent
          description={(product?.description as unknown) as string}
          attributes={(product?.attributes as unknown) as string}
          focusedTab={aboutFocusedTab}
          qas={(product?.qa as unknown) as ISingleQA[]}
          refundmentDetails={refundmentDetails}
        />
      </CustomModal>

      <CustomModal
        avoidKeyboard
        onBackButtonPress={() => setAskAboutProductModalVisible(false)}
        isVisible={askAboutProductModalVisible}
        onClose={() => setAskAboutProductModalVisible(false)}>
        <AskAboutProductContent
          productId={product?._id as string}
          onClose={() => setAskAboutProductModalVisible(false)}
        />
      </CustomModal>

      <CustomModal
        avoidKeyboard
        onBackButtonPress={() => setComplaintModalVisible(false)}
        isVisible={complaintModalVisible}
        onClose={() => setComplaintModalVisible(false)}>
        <PazarComplaintContent
          onClose={() => setComplaintModalVisible(false)}
        />
      </CustomModal>

      <CustomModal
        isVisible={imagesZoomViewerModalOpen}
        onClose={() => setImagesZoomViewerModalOpen(false)}>
        <ImageViewer
          enableSwipeDown
          useNativeDriver
          backgroundColor="white"
          renderHeader={() => (
            <View style={styles.zoomViewHeaderContainer}>
              <TouchableOpacity
                hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
                onPress={() => setImagesZoomViewerModalOpen(false)}>
                <FontAwesome5
                  name="times"
                  light
                  size={30}
                  color={COLORS.mainDark}
                />
              </TouchableOpacity>
            </View>
          )}
          onCancel={() => setImagesZoomViewerModalOpen(false)}
          imageUrls={product?.images.map((item) => ({url: item.detailImage}))}
        />
      </CustomModal>
    </>
  );
};
export default PazarProductDetailScreen;
