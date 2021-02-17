import React, {memo, useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {styles} from './HalPopularProducts.styles';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import SingleProductHal from '../../../../components/shared/SingleProductHal/SingleProductHal';
import {IHalProduct} from '../../../../types/IProductRegular.type';
import {getHalPopularProducts} from '../../../../services/hal.service';

const HalPopularProducts: React.FC = () => {
  const [popularProducts, setPopularProducts] = useState<IHalProduct[]>([]);

  useEffect(() => {
    getHalPopularProducts().then(({data: {data}}) => {
      setPopularProducts(data);
    });
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
      renderItem={({item, index}) =>
        index !== popularProducts.length - 1 ? (
          <SingleProductHal
            product={item}
            containerStyle={{
              width: Dimensions.get('window').width / 2.01 - 15,
            }}
            imageContainerStyle={{
              width: Dimensions.get('window').width / 2.5 - 1,
            }}
            imageStyle={{
              width: Dimensions.get('window').width / 2.5 - 15,
            }}
          />
        ) : (
          <>
            <SingleProductHal
              product={item}
              containerStyle={{
                width: Dimensions.get('window').width / 2.01 - 15,
              }}
              imageContainerStyle={{
                width: Dimensions.get('window').width / 2.5 - 1,
              }}
              imageStyle={{
                width: Dimensions.get('window').width / 2.5 - 15,
              }}
            />
            <ScrollDivider />
          </>
        )
      }
    />
  );
};

export default memo(HalPopularProducts);
