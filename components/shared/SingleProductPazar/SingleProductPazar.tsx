import React, {memo} from 'react';
import {View, Image, Text, ViewStyle, ImageStyle} from 'react-native';
import {styles} from './SingleProductPazar.styles';
import {globalStyles} from '../../../assets/globalStyles.styles';
import ProductNameTypo from '../../micro-components/Typography/ProductNameTypo/ProductNameTypo';
import StarRating from '../../micro-components/StarRating/StarRating';
import PriceTypo from '../../micro-components/Typography/PriceTypo/PriceTypo';
import {useNavigation} from '@react-navigation/native';
import {IPazarProduct} from '../../../types/IProductRegular.type';
import {mockProductPazar} from '../../../assets/mock-data/single-product.data';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../assets/colors';

const SingleProductPazar: React.FC<{
  product: IPazarProduct;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  imageContainerStyle: ViewStyle;
}> = ({product, containerStyle, imageStyle, imageContainerStyle}) => {
  const navigation = useNavigation();

  if (!product) {
    product = mockProductPazar;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.mainContainer, ...containerStyle}}
      onPress={() =>
        (navigation as any).push('pazar_product_detail_screen', {
          productName: product.title,
          id: product._id,
        })
      }>
      {/* IMAGE CONTAINER */}
      <View style={{...styles.imageContainer, ...imageContainerStyle}}>
        <Image
          style={{...styles.imageStyle, ...imageStyle}}
          source={{
            uri: product.images.listImage,
          }}
        />

        {product.hasVariant && (
          <View
            style={{
              backgroundColor: COLORS.mainGreen,
              ...styles.productVariantContainer,
            }}>
            <FontAwesome5 name="palette" color="white" size={10} />
          </View>
        )}

        {product.productType === 'c2c-corp' ? (
          <View
            style={{
              backgroundColor: COLORS.mainGreen,
              ...styles.productTypeContainer,
            }}>
            <FontAwesome5 name="store" color="white" size={10} />
          </View>
        ) : (
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...styles.productTypeContainer,
              backgroundColor: 'white',
            }}>
            <FontAwesome5 name="user" color={COLORS.mainGreen} size={10} />
          </View>
        )}
      </View>
      <View style={styles.subContainer}>
        <View style={styles.productNameContainer}>
          <ProductNameTypo type="list" text={product.title} />
        </View>
        {!product.hasVariant && <View style={styles.fakeHeight} />}
        <View style={styles.bottomContainer}>
          <View>
            <StarRating
              rating={product.productScore}
              reviewCount={0}
              containerStyle={{
                ...globalStyles.marginTopTen,
                ...globalStyles.marginBottomTen,
              }}
            />
            <PriceTypo oldPrice={product.price} price={product.salePrice} />
          </View>
          <View>
            {product.shippingDetail?.freeShipping && (
              <View style={styles.cargoStatusContainer}>
                <Text style={styles.cargoText}>Ücretsiz Kargo</Text>
              </View>
            )}

            <View style={styles.productStatusContainer}>
              <FontAwesome5
                name={product.isProductNew ? 'layer-plus' : 'layer-minus'}
                color={COLORS.mainPurple}
                size={15}
              />
              <Text style={styles.productStatusText}>
                {product.isProductNew ? 'Durumu 0 Ürün' : 'İkinci El Ürün'}
              </Text>
            </View>
          </View>
        </View>

        {/* {product.stock < 5 && (
          <View style={styles.outOfStockContainer}>
            <DescriptionTypo
              text="Tükenmek Üzere"
              textStyle={styles.outOfStockText}
            />
          </View>
        )} */}
      </View>
    </TouchableOpacity>
  );
};

export default memo(SingleProductPazar);
