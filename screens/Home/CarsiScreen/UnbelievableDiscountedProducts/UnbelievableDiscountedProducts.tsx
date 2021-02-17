import React, {memo, useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import {styles} from './UnbelievableDiscountedProducts.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import SingleProductRegular from '../../../../components/shared/SingleProductRegular/SingleProductRegular';
import {IProductRegular} from '../../../../types/IProductRegular.type';
import {getUnbelievableDiscountedProducts} from '../../../../services/carsi.service';

const UnbelievableDiscountedProducts = () => {
  //   const [
  //   unbelievableDiscountedProductsLoading,
  //   setUnbelievableDiscountedProductsLoading,
  // ] = useState<boolean>(false);
  const [
    unbelievableDiscountedProducts,
    setUnbelievableDiscountedProducts,
  ] = useState<IProductRegular[]>([]);

  useEffect(() => {
    getUnbelievableDiscountedProducts().then(({data: {data}}) =>
      setUnbelievableDiscountedProducts(data),
    );
    // .finally(() => setUnbelievableDiscountedProductsLoading(false));
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.flatListContainer}
      keyExtractor={(item) => item._id}
      style={globalStyles.marginTopTen}
      data={unbelievableDiscountedProducts}
      ItemSeparatorComponent={() => <ScrollDivider />}
      renderItem={({item, index}) => (
        <SingleProductRegular
          product={item}
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{
            marginRight:
              index === unbelievableDiscountedProducts.length - 1 ? 20 : 0,
            width: Dimensions.get('window').width / 2.01 - 15,
          }}
          imageContainerStyle={{
            width: Dimensions.get('window').width / 2.5 - 1,
          }}
          imageStyle={{
            width: Dimensions.get('window').width / 2.5 - 15,
          }}
        />
      )}
    />
  );
};

export default memo(UnbelievableDiscountedProducts);
