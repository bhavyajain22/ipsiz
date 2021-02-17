import React, {memo, useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {styles} from './PopularProducts.styles';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import SingleProductRegular from '../../../../components/shared/SingleProductRegular/SingleProductRegular';
import {IProductRegular} from '../../../../types/IProductRegular.type';
import {getPopularProducts} from '../../../../services/carsi.service';

const PopularProducts: React.FC = () => {
  // const [popularProductsLoading, setPopularProductsLoading] = useState<boolean>(
  //   false,
  // );
  const [popularProducts, setPopularProducts] = useState<IProductRegular[]>([]);

  useEffect(() => {
    getPopularProducts().then(({data: {data}}) => setPopularProducts(data));
    // .finally(() => setPopularProductsLoading(false));
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.flatListContainer}
      style={globalStyles.marginTopTen}
      data={popularProducts}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <ScrollDivider />}
      renderItem={({item, index}) => (
        <SingleProductRegular
          product={item}
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{
            marginRight: index === popularProducts.length - 1 ? 20 : 0,
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

export default memo(PopularProducts);
