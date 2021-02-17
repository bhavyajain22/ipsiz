import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Share,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {globalStyles} from '../../../assets/globalStyles.styles';
import CustomCarousel from '../../../components/CustomCarousel/CustomCarousel';
import H2Typo from '../../../components/micro-components/Typography/H2Typo/H2Typo';
import {styles} from './HalProductDetailScreen.styles';
import StarRating from '../../../components/micro-components/StarRating/StarRating';
import SmallTypo from '../../../components/micro-components/Typography/SmallTypo/SmallTypo';
import {COLORS} from '../../../assets/colors';
import { FontAwesome5 } from '@expo/vector-icons';
import MessageOfferButtonGroup from './MessageOfferButtonGroup/MessageOfferButtonGroup';
import HalAboutProductContent from './HalAboutProductContent/HalAboutProductContent';
import HalAboutProductView from './HalAboutProductView/HalAboutProductView';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import CustomModal from '../../../components/micro-components/Modal/CustomModal/CustomModal';
import HalCommentView from './HalCommentView/HalCommentView';
import HalShopView from './HalShopView/HalShopView';
import ScrollDivider from '../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import HeaderTypo from '../../../components/micro-components/Typography/HeaderTypo/HeaderTypo';
import IconCircle from '../../../components/IconCircle/IconCircle';
import SideCard from '../../../components/SideCard/SideCard';
import SingleProductHal from '../../../components/shared/SingleProductHal/SingleProductHal';
import CustomButton from '../../../components/micro-components/Controls/CustomButton/CustomButton';
import HalComplaintContent from './HalComplaintContent/HalComplaintContent';
import {StackNavigationProp} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {HomeStackParamList} from '../../../types/navigation-types/stack-types/home-stack.type';
import {RootStackParamList} from '../../../types/navigation-types/stack-types/root-stack.type';
import {MainTabParamList} from '../../../types/navigation-types/tab-types/main-tab.type';
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
import HalProductDetailsSkeleton from './HalProductDetailsSkeleton/HalProductDetailsSkeleton';
import {IHalProduct} from '../../../types/IProductRegular.type';
import AskAboutProductContent from '../ProductDetailSharedScreens/AskAboutProductContent/AskAboutProductContent';
import AskQuestionContent from '../ProductDetailSharedScreens/AskQuestionContent/AskQuestionContent';

type IHalProductDetailsHomeNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'tab_stack'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'home_stack'>,
    StackNavigationProp<HomeStackParamList, 'hal_product_detail_screen'>
  >
>;

type IHalProductDetailsRootNav = StackNavigationProp<
  RootStackParamList,
  'hal_product_detail_screen'
>;

const HalProductDetailScreen: React.FC<{
  navigation: IHalProductDetailsHomeNav | IHalProductDetailsRootNav;
  route:
    | RouteProp<RootStackParamList, 'hal_product_detail_screen'>
    | RouteProp<HomeStackParamList, 'hal_product_detail_screen'>;
}> = ({route}) => {
  const [productLoading, setProductLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<IProductDetailed | null>(null);
  const [similarAndOtherProducts, setSimilarAndOtherProducts] = useState<{
    similarProducts: IHalProduct[];
    otherProducts: IHalProduct[];
  }>({similarProducts: [], otherProducts: []});
  const [detailModalVisible, setDetailModalVisible] = useState<boolean>(false);
  const [askQuestionModalVisible, setAskQuestionModalVisible] = useState<
    boolean
  >(false);
  const [complaintModalVisible, setComplaintModalVisible] = useState<boolean>(
    false,
  );
  const [aboutFocusedTab, setAboutFocusedTab] = useState<0 | 1 | 2 | 3>(0);
  const [imagesZoomViewerModalOpen, setImagesZoomViewerModalOpen] = useState<
    boolean
  >(false);
  const [agreementDetails, setAgreementDetails] = useState<string>('');
  const [
    askAboutProductModalVisible,
    setAskAboutProductModalVisible,
  ] = useState<boolean>(false);

  useEffect(() => {
    setProductLoading(true);
    getProductDetails(route.params.id)
      .then(({data: {result}}) => {
        setProduct(result);
      })
      .catch((e) => console.log(e))
      .finally(() => setProductLoading(false));

    Promise.all([
      getSimilarProducts(route.params.id),
      getStoresOtherProducts(route.params.id),
      getRefundmentInfo(route.params.id),
    ]).then((res) => {
      const [similarProducts, otherProducts, agreementInfo] = res.map(
        (i) => i.data,
      );
      setSimilarAndOtherProducts({
        similarProducts: (similarProducts as unknown) as IHalProduct[],
        otherProducts: (otherProducts as unknown) as IHalProduct[],
      });
      setAgreementDetails(agreementInfo as string);
    });
  }, [route.params.id]);

  return (
    <>
      {!productLoading ? (
        <ScrollView stickyHeaderIndices={[1]} style={styles.mainContainer}>
          {/* FIRST CONTAINER */}
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
                      textStyle={{color: COLORS.mainDark}}
                    />
                    <SmallTypo text={product?.store.name} />
                  </View>
                  <StarRating
                    rating={(product?.productScore as unknown) as number}
                    reviewCount={100}
                    containerStyle={globalStyles.marginTopTen}
                  />
                </View>
                <View style={globalStyles.alignItemsEnd}>
                  <View
                    style={{
                      ...globalStyles.flexRow,
                      ...globalStyles.marginTopTen,
                    }}>
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
                    {product?.shippingDetail?.freeShipping && (
                      <View style={styles.cargoStatusContainer}>
                        <Text style={styles.cargoText}>Ücretsiz Kargo</Text>
                      </View>
                    )}
                    {/* <View style={styles.percentageStatusContainer}>
                  <Text style={styles.percentageText}>13%</Text>
                </View> */}
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* MESSAGE & OFFER BUTTON GROUP CONTAINER */}
          <View style={styles.fifthContainer}>
            <MessageOfferButtonGroup
              handleAddToCartClicked={console.log}
              handleBuyImmediatelyClicked={console.log}
            />
          </View>

          {/* ABOUT PRODUCT CONTENT */}
          <View style={styles.fifthContainer}>
            <HalAboutProductView
              handlePress={(focusedTab) => {
                setAboutFocusedTab(focusedTab);
                setDetailModalVisible(true);
              }}
            />
          </View>

          {/* COMMENT CONTAINER */}
          <View style={styles.seventhContainer}>
            <HalCommentView
              comments={
                (product?.comments as unknown) as ISingleProductComment[]
              }
              seeAllClicked={() => setDetailModalVisible(true)}
            />
          </View>

          {/* SHOP CONTAINER */}
          <View style={styles.eighthContainer}>
            <HalShopView
              storeName={(product?.store.name as unknown) as string}
              percentage={(product?.store.storeRating as unknown) as number}
              onAskButtonClick={() => setAskQuestionModalVisible(true)}
            />
            <SideCard containerStyle={styles.sideCardStyle}>
              <View style={styles.cardHeaderContainer}>
                <IconCircle iconName="bell" containerColor={COLORS.mainDark} />
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
                  <SingleProductHal
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
          {/* SIMILAR PRODUCTS */}
          <View style={globalStyles.zIndexZero}>
            <SideCard containerStyle={styles.sideCardStyle}>
              <View style={styles.cardHeaderContainer}>
                <IconCircle iconName="bell" containerColor={COLORS.mainDark} />
                <HeaderTypo
                  textStyle={globalStyles.marginLeftTen}
                  text="Benzer Ürünler"
                />
              </View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.flatListContainer}
                style={globalStyles.marginTopTwenty}
                data={similarAndOtherProducts.similarProducts}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <ScrollDivider />}
                renderItem={({item, index}) => (
                  <SingleProductHal
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
        <HalProductDetailsSkeleton />
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
        <HalAboutProductContent
          focusedTab={aboutFocusedTab}
          description={(product?.description as unknown) as string}
          attributes={(product?.attributes as unknown) as string}
          qas={(product?.qa as unknown) as ISingleQA[]}
          agreementDetails={agreementDetails}
        />
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
        <HalComplaintContent onClose={() => setComplaintModalVisible(false)} />
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

export default HalProductDetailScreen;
