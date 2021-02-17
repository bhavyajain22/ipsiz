import React, {memo} from 'react';
import {View, Image, Text, ViewStyle, ImageStyle} from 'react-native';
import {styles} from './SingleProductHal.styles';
import {globalStyles} from '../../../assets/globalStyles.styles';
import ProductNameTypo from '../../micro-components/Typography/ProductNameTypo/ProductNameTypo';
import StarRating from '../../micro-components/StarRating/StarRating';
import ShopNameTypo from '../../micro-components/Typography/ShopNameTypo/ShopNameTypo';
import {useNavigation} from '@react-navigation/native';
import {IHalProduct} from '../../../types/IProductRegular.type';
import {mockProductHal} from '../../../assets/mock-data/single-product.data';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

const SingleProductHal: React.FC<{
  shopNameShown?: boolean;
  product: IHalProduct;
  containerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  imageContainerStyle: ViewStyle;
}> = ({product, containerStyle, imageStyle, imageContainerStyle}) => {
  const navigation = useNavigation();

  if (!product) {
    product = mockProductHal;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={{
          ...styles.mainContainer,
          ...containerStyle,
        }}
        onPress={() =>
          (navigation as any).push('hal_product_detail_screen', {
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
        </View>
        <View style={styles.subContainer}>
          <View>
            <View style={styles.productNameContainer}>
              <ProductNameTypo type="list" text={product.title} />
            </View>

            {product.storeName && <ShopNameTypo text={product.storeName} />}

            <View style={styles.bottomContainer}>
              <View style={styles.ratingStockContainer}>
                <StarRating
                  rating={product.productScore}
                  reviewCount={300}
                  containerStyle={globalStyles.marginTopTen}
                />
                <View>
                  <Text style={styles.stockTitleText}>Stok</Text>
                  <Text style={styles.stockValueText}>{product.stock}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.contactButtonContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            (navigation as any).push('hal_product_detail_screen', {
              productName: product.title,
              id: product._id,
            });
          }}
          style={{
            ...styles.contactButtonStyle,
          }}>
          <FontAwesome5 name="envelope" solid color="#5C6C81" size={20} />
          <Text style={styles.contactText}>İletişime Geç</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(SingleProductHal);
