import React, {useEffect, useState} from 'react';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {
  View,
  Image,
  Dimensions,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  Share,
} from 'react-native';
import {styles} from './ProductDetailScreen.styles';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';
import ImageViewer from 'react-native-image-zoom-viewer';
import CustomCarousel from '../../../components/CustomCarousel/CustomCarousel';
import StarRating from '../../../components/micro-components/StarRating/StarRating';
import H2Typo from '../../../components/micro-components/Typography/H2Typo/H2Typo';
import PriceTypo from '../../../components/micro-components/Typography/PriceTypo/PriceTypo';
import SmallTypo from '../../../components/micro-components/Typography/SmallTypo/SmallTypo';
import { FontAwesome5 } from '@expo/vector-icons';
import CountSelector from '../../../components/micro-components/Controls/CountSelector/CountSelector';
import StockView from './StockView/StockView';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import FeaturesView from './FeaturesView/FeaturesView';
import DescriptionTypo from '../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import ProductVariantsRenderer from '../../../factory/form/ProductVariantRenderer/ProductVariantRenderer';
import OrderButtonGroup from './OrderButtonGroup/OrderButtonGroup';
import AboutProductView from './AboutProductView/AboutProductView';
import CustomModal from '../../../components/micro-components/Modal/CustomModal/CustomModal';
import AboutProductContent from './AboutProductContent/AboutProductContent';
import CommentView from './CommentView/CommentView';
import ShopView from './ShopView/ShopView';
import ScrollDivider from '../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import SingleProductRegular from '../../../components/shared/SingleProductRegular/SingleProductRegular';
import SideCard from '../../../components/SideCard/SideCard';
import IconCircle from '../../../components/IconCircle/IconCircle';
import HeaderTypo from '../../../components/micro-components/Typography/HeaderTypo/HeaderTypo';
import CustomButton from '../../../components/micro-components/Controls/CustomButton/CustomButton';
import AskQuestionContent from '../ProductDetailSharedScreens/AskQuestionContent/AskQuestionContent';
import ComplaintContent from './ComplaintContent/ComplaintContent';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../types/navigation-types/stack-types/root-stack.type';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {MainTabParamList} from '../../../types/navigation-types/tab-types/main-tab.type';
import {HomeStackParamList} from '../../../types/navigation-types/stack-types/home-stack.type';
import {
  IProductDetailed,
  ISingleProductComment,
  ISingleQA,
} from '../../../types/IProductDetailed.type';
import {
  getProductDetails,
  getRefundmentInfo,
  getSimilarProducts,
  getStoresOtherProducts,
} from '../../../services/product-detail.service';
import ProductDetailsSkeleton from './ProductDetailsSkeleton/ProductDetailsSkeleton';
import {IProductRegular} from '../../../types/IProductRegular.type';
import AskAboutProductContent from '../ProductDetailSharedScreens/AskAboutProductContent/AskAboutProductContent';
import SetPriceAlarmContent from '../ProductDetailSharedScreens/SetPriceAlarmContent/SetPriceAlarmContent';
import NewCommentContent from '../ProductDetailSharedScreens/NewCommentContent/NewCommentContent';

type IProductDetailsHomeNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'tab_stack'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'home_stack'>,
    StackNavigationProp<HomeStackParamList, 'product_detail_screen'>
  >
>;

type IProductDetailsRootNav = StackNavigationProp<
  RootStackParamList,
  'product_detail_screen'
>;

const ProductDetailScreen: React.FC<{
  navigation: IProductDetailsHomeNav | IProductDetailsRootNav;
  route:
    | RouteProp<RootStackParamList, 'product_detail_screen'>
    | RouteProp<HomeStackParamList, 'product_detail_screen'>;
}> = ({route}) => {
  const [product, setProduct] = useState<IProductDetailed | null>(null);
  const [productLoading, setProductLoading] = useState<boolean>(false);
  const [similarAndOtherProducts, setSimilarAndOtherProducts] = useState<{
    similarProducts: IProductRegular[];
    otherProducts: IProductRegular[];
  }>({similarProducts: [], otherProducts: []});
  const [itemCount, setItemCount] = useState(1);
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [askQuestionModalVisible, setAskQuestionModalVisible] = useState<
    boolean
  >(false);
  const [
    askAboutProductModalVisible,
    setAskAboutProductModalVisible,
  ] = useState<boolean>(false);
  const [complaintModalVisible, setComplaintModalVisible] = useState(false);
  const [aboutFocusedTab, setAboutFocusedTab] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [imagesZoomViewerModalOpen, setImagesZoomViewerModalOpen] = useState<
    boolean
  >(false);
  const [refundmentDetails, setRefundmentDetails] = useState<string>('');
  const [priceAlarmModalOpen, setPriceAlarmModalOpen] = useState<boolean>(
    false,
  );
  const [newCommentModalOpen, setNewCommentModalOpen] = useState<boolean>(
    false,
  );

  useEffect(() => {
    setProductLoading(true);
    getProductDetails(route.params.id)
      .then(({data: {result}}) => {
        setProduct(result);
      })
      .finally(() => setProductLoading(false));

    Promise.all([
      getSimilarProducts(route.params.id),
      getStoresOtherProducts(route.params.id),
      getRefundmentInfo(route.params.id),
    ]).then((res) => {
      const [similarProducts, otherProducts, refundmentInfo] = res.map(
        (i) => i.data,
      );
      setSimilarAndOtherProducts({
        similarProducts: (similarProducts as unknown) as IProductRegular[],
        otherProducts: (otherProducts as unknown) as IProductRegular[],
      });
      setRefundmentDetails(refundmentInfo as string);
    });
  }, [route.params.id]);

  return (
    <>
      {!productLoading ? (
        <ScrollView stickyHeaderIndices={[4]} style={styles.mainContainer}>
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
              <TouchableOpacity
                onPress={() => setPriceAlarmModalOpen(true)}
                style={styles.addToAlarmButton}>
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
                  <View style={styles.shopTextContainer}>
                    <SmallTypo
                      text="Satıcı: "
                      textStyle={{color: COLORS.mainGreen}}
                    />
                    <SmallTypo text={product?.store.name} />
                  </View>

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
                          %{product.discountRate}
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
            <StockView count={(product?.stock as unknown) as number} />
            <CountSelector
              count={itemCount}
              onDecrement={() => setItemCount((prev) => prev - 1)}
              onIncrement={() => setItemCount((prev) => prev + 1)}
              maxCount={(product?.stock as unknown) as number}
            />
          </View>
          {/* FEATURES CONTAINER */}
          <View style={styles.thirdContainer}>
            <FeaturesView
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
                text={`${product?.shippingDetail.shippingTime} `}
                textStyle={{color: COLORS.mainGreen}}
              />
              <DescriptionTypo text="Kargoya Verilir" />
            </View>
          </View>
          {/* VARIANT CONTAINER */}
          {product?.hasVariant ? (
            <View style={styles.fourthContainer}>
              <ProductVariantsRenderer
                propertyData={product.variants.variantProperties}
                variantData={product.variants.variantData}
              />
            </View>
          ) : (
            <View />
          )}

          {/* BUY BUTTONS CONTAINER */}
          <View style={styles.fifthContainer}>
            <OrderButtonGroup
              handleAddToCartClicked={console.log}
              handleBuyImmediatelyClicked={console.log}
            />
          </View>
          {/* ABOUT PRODUCT CONTAINER */}
          <View style={styles.sixthContainer}>
            <AboutProductView
              handlePress={(focusedTab) => {
                setAboutFocusedTab(focusedTab);
                setDetailModalVisible(true);
              }}
            />
          </View>
          {/* COMMENT CONTAINER */}
          <View style={styles.seventhContainer}>
            <CommentView
              comments={
                (product?.comments as unknown) as ISingleProductComment[]
              }
              seeAllClicked={() => setDetailModalVisible(true)}
              onNewCommentButtonClicked={() => setNewCommentModalOpen(true)}
            />
          </View>
          {/* SHOP CONTAINER */}
          <View style={styles.eighthContainer}>
            <ShopView
              shopName={(product?.store.name as unknown) as string}
              shopId={'EXAMPLE ID'}
              percentage={(product?.store.storeRating as unknown) as number}
              onAskButtonClick={() => setAskQuestionModalVisible(true)}
            />
            <SideCard containerStyle={styles.sideCardStyle}>
              <View style={styles.cardHeaderContainer}>
                <IconCircle iconName="bell" containerColor={COLORS.mainGreen} />
                <HeaderTypo
                  textStyle={globalStyles.marginLeftTen}
                  text="Mağazanın Diğer Ürünleri"
                />
              </View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.flatListContainer}
                style={globalStyles.marginTopTen}
                data={similarAndOtherProducts.otherProducts}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <ScrollDivider />}
                renderItem={({item, index}) => (
                  <SingleProductRegular
                    product={item}
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyle={{
                      marginRight:
                        index ===
                        similarAndOtherProducts.similarProducts.length - 1
                          ? 20
                          : 0,
                    }}
                  />
                )}
              />
            </SideCard>
          </View>
          {/* SIMILAR PRODUCTS */}
          <View style={globalStyles.zIndexZero}>
            <SideCard containerStyle={styles.sideCardStyle}>
              <View style={styles.cardHeaderContainer}>
                <IconCircle iconName="bell" containerColor={COLORS.mainGreen} />
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
                  <SingleProductRegular
                    product={item}
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyle={{
                      marginRight:
                        index ===
                        similarAndOtherProducts.similarProducts.length - 1
                          ? 20
                          : 0,
                    }}
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
        <ProductDetailsSkeleton />
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
        onBackButtonPress={() => setDetailModalVisible(false)}
        isVisible={detailModalVisible}
        onClose={() => setDetailModalVisible(false)}>
        <AboutProductContent
          focusedTab={aboutFocusedTab}
          description={(product?.description as unknown) as string}
          attributes={(product?.attributes as unknown) as string}
          installmentDetails={
            (product?.installmentDetails as unknown) as string
          }
          qas={(product?.qa as unknown) as ISingleQA[]}
          refundmentDetails={refundmentDetails}
        />
      </CustomModal>

      <CustomModal
        avoidKeyboard
        onBackButtonPress={() => setPriceAlarmModalOpen(false)}
        isVisible={priceAlarmModalOpen}
        onClose={() => setPriceAlarmModalOpen(false)}>
        <SetPriceAlarmContent onClose={() => setPriceAlarmModalOpen(false)} />
      </CustomModal>

      <CustomModal
        avoidKeyboard
        onBackButtonPress={() => setAskQuestionModalVisible(false)}
        isVisible={askQuestionModalVisible}
        onClose={() => setAskQuestionModalVisible(false)}>
        <AskQuestionContent
          productId={product?._id as string}
          onClose={() => setAskQuestionModalVisible(false)}
        />
      </CustomModal>

      <CustomModal
        avoidKeyboard
        onBackButtonPress={() => setNewCommentModalOpen(false)}
        isVisible={newCommentModalOpen}
        onClose={() => setNewCommentModalOpen(false)}>
        <NewCommentContent onClose={() => setNewCommentModalOpen(false)} />
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
        <ComplaintContent onClose={() => setComplaintModalVisible(false)} />
      </CustomModal>

      <CustomModal
        isVisible={imagesZoomViewerModalOpen}
        onClose={() => setImagesZoomViewerModalOpen(false)}>
        <ImageViewer
          enableSwipeDown
          useNativeDriver
          backgroundColor="white"
          renderIndicator={() => <></>}
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

export default ProductDetailScreen;
