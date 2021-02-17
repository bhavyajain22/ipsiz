import React, {memo, useEffect, useState} from 'react';
import {styles} from './PazarLatestAddedProducts.styles';
import {Dimensions, FlatList} from 'react-native';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import SingleProductPazar from '../../../../components/shared/SingleProductPazar/SingleProductPazar';
import {IPazarProduct} from '../../../../types/IProductRegular.type';
import {getPazarLatestProducts} from '../../../../services/pazar.service';

const PazarLatestAddedProducts: React.FC = () => {
  const [latestProducts, setLatestProducts] = useState<IPazarProduct[]>([]);

  useEffect(() => {
    getPazarLatestProducts().then(({data: {data}}) => setLatestProducts(data));
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.flatListContainer}
      style={globalStyles.marginTopTwenty}
      data={latestProducts}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <ScrollDivider />}
      renderItem={({item, index}) => (
        <SingleProductPazar
          product={item}
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{
            marginRight: index === latestProducts.length - 1 ? 20 : 0,
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

export default memo(PazarLatestAddedProducts);
