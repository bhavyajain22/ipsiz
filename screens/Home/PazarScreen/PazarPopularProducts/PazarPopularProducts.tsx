import React, {memo, useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import SingleProductPazar from '../../../../components/shared/SingleProductPazar/SingleProductPazar';
import {getPazarPopularProducts} from '../../../../services/pazar.service';
import {IPazarProduct} from '../../../../types/IProductRegular.type';
import {styles} from './PazarPopularProducts.styles';

const PazarPopularProducts: React.FC = () => {
  const [popularProducts, setPopularProducts] = useState<IPazarProduct[]>([]);

  useEffect(() => {
    getPazarPopularProducts().then(({data: {data}}) =>
      setPopularProducts(data),
    );
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.flatListContainer}
      style={globalStyles.marginTopTwenty}
      data={popularProducts}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <ScrollDivider />}
      renderItem={({item, index}) => (
        <SingleProductPazar
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

export default memo(PazarPopularProducts);
