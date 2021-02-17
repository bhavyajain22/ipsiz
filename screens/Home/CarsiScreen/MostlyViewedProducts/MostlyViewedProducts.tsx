import React, {memo, useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {styles} from './MostlyViewedProducts.styles';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import SingleProductRegular from '../../../../components/shared/SingleProductRegular/SingleProductRegular';
import {IProductRegular} from '../../../../types/IProductRegular.type';
import {getMostViewedProducts} from '../../../../services/carsi.service';

const MostlyViewedProducts: React.FC = () => {
  // const [
  //   mostlyViewedProductsLoading,
  //   setMostlyViewedProductsLoading,
  // ] = useState<boolean>(false);
  const [mostlyViewedProducts, setMostlyViewedProducts] = useState<
    IProductRegular[]
  >([]);

  useEffect(() => {
    getMostViewedProducts().then(({data: {data}}) =>
      setMostlyViewedProducts(data),
    );
    // .finally(() => setMostlyViewedProductsLoading(false));
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.flatListContainer}
      style={globalStyles.marginTopTen}
      data={mostlyViewedProducts}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <ScrollDivider />}
      renderItem={({item, index}) => (
        <SingleProductRegular
          product={item}
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{
            marginRight: index === mostlyViewedProducts.length - 1 ? 20 : 0,
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

export default memo(MostlyViewedProducts);
