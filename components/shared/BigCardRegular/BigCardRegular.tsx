import React, { memo } from "react";
import { View, Image, Text, ViewStyle, ImageStyle } from "react-native";
import { styles } from "./BigCardRegular.styles";
import ProductNameTypo from "../../micro-components/Typography/ProductNameTypo/ProductNameTypo";
import StarRating from "../../micro-components/StarRating/StarRating";
import ShopNameTypo from "../../micro-components/Typography/ShopNameTypo/ShopNameTypo";
import PriceTypo from "../../micro-components/Typography/PriceTypo/PriceTypo";
import { useNavigation } from "@react-navigation/native";
import { IProductRegular } from "../../../types/IProductRegular.type";
import { mockProduct } from "../../../assets/mock-data/single-product.data";
import ProductTimer from "./ProductTimer/ProductTimer";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../../../assets/colors";

const BigCardRegular: React.FC<{
  shopNameShown?: boolean;
  timeLeftShown?: boolean;
  product: IProductRegular;
  containerStyle?: ViewStyle;
  imageContainerStyle?: ViewStyle;
  imageStyle?: ImageStyle;
}> = ({
  timeLeftShown,
  product,
  shopNameShown,
  containerStyle,
  imageStyle,
  imageContainerStyle,
}) => {
  const navigation = useNavigation();

  if (!product) {
    product = mockProduct;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.mainContainer,
        minHeight: timeLeftShown ? 390 : 335,
        ...containerStyle,
      }}
      onPress={() =>
        (navigation as any).navigate("product_detail_screen", {
          productName: product.title,
          id: product._id,
        })
      }
    >
      {/* IMAGE CONTAINER */}
      
      <View style={{ ...styles.imageContainer, ...imageContainerStyle }}>
      {product.stock != 0 && product.stock <= 5 && (
          <Image
            style={{ ...styles.imageGreenBGStyle }}
            source={require("../../../assets/images/urun-tukenmek-uzere.png")}
          />
        )}
        <Image
          style={{ ...styles.imageStyle, ...imageStyle }}
          source={{
            uri: product.images.listImage,
          }}
        />
      </View>
      
      {product.hasVariant && (
        <View
          style={{
            backgroundColor: COLORS.mainGreen,
            ...styles.productVariantContainer,
          }}
        >
          <FontAwesome5 name="palette" color="white" size={10} />
        </View>
      )}
      
      <View
        style={{
          ...styles.productStokContainer,
        }}
      >
        {product.stock === 0 && (
          <Image
            style={{ ...styles.imageGreenBGStyle }}
            source={require("../../../assets/images/urun-tukendi.png")}
          />
        )}
      
      </View>
      <View style={styles.subContainer}>
        <View style={styles.productNameContainer}>
          <ProductNameTypo type="list" text={product.title} />
        </View>
        {!product.hasVariant && <View style={styles.fakeHeight} />}
        {shopNameShown && <ShopNameTypo text="" />}
        <View style={styles.bottomContainer}>
          <View>
            <StarRating
              rating={product.productScore}
              reviewCount={300}
              containerStyle={styles.ratingStarStyle}
            />
            <PriceTypo oldPrice={product.price} price={product.salePrice} />
          </View>
          <View>
            {product.shippingDetail?.freeShipping && (
              <View style={styles.cargoStatusContainer}>
                <Image
                  style={{ ...styles.imageGreenBGStyle }}
                  source={require("../../../assets/images/green-bg-bar.png")}
                />
                <Text style={styles.cargoText}>Ücretsiz Kargo</Text>
              </View>
            )}
            {product.isDiscountExists && (
              <View style={styles.percentageStatusContainer}>
                <Image
                  style={{ ...styles.imageGreenBGStyle }}
                  source={require("../../../assets/images/pink-bg-bar.png")}
                />
                <View style={styles.percentageTextBlock}>
                  <Text style={styles.percentageText}>
                    %{product.discountRate}
                  </Text>
                  <Text style={styles.percentage2Text}>indirim</Text>
                </View>
              </View>
            )}
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
        {/* TIME LEFT */}

        {timeLeftShown && <View style={styles.productLine} />}
        {timeLeftShown && <ProductTimer endDate={product.endDate} />}
      </View>
    </TouchableOpacity>
  );
};

export default memo(BigCardRegular);
