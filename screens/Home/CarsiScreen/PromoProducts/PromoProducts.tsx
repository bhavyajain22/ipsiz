import React, {memo, ReactElement, useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styles} from './PromoProducts.styles';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import RegularTabView from '../../../../components/micro-components/RegularTabView/RegularTabView';
import SingleProductRegular from '../../../../components/shared/SingleProductRegular/SingleProductRegular';
import {IPromoSection} from '../../../../types/response-types/carsi.types';
import {COLORS} from '../../../../assets/colors';
import {getPromoProducts} from '../../../../services/carsi.service';

const PromoProducts: React.FC = () => {
  // const [promoProductsLoading, setPromoProductsLoading] = useState<boolean>(
  //   false,
  // );
  const [promoProducts, setPromoProducts] = useState<IPromoSection[]>([]);

  useEffect(() => {
    getPromoProducts().then(({data: {data}}) => setPromoProducts(data));
    // .finally(() => setPromoProductsLoading(false));
  }, []);

  return (
    <RegularTabView
      scrollEnabled={true}
      tabActiveColor={COLORS.mainGreen}
      tabInactiveColor={COLORS.midGray}
      startingIndex={0}
      routes={promoProducts.map(({categoryName}) => ({
        key: categoryName,
        title: categoryName,
      }))}
      scenesObj={promoProducts.reduce(
        (prev: {[key: string]: () => ReactElement}, curr: IPromoSection) => ({
          ...prev,
          [curr.categoryName]: () => (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              style={globalStyles.marginTopTen}
              contentContainerStyle={[
                globalStyles.marginLeftFive,
                globalStyles.marginBottomTen,
              ]}
              data={curr.products}
              keyExtractor={(item) => item._id}
              ItemSeparatorComponent={() => <ScrollDivider />}
              renderItem={({item, index}) => (
                <SingleProductRegular
                  product={item}
                  // eslint-disable-next-line react-native/no-inline-styles
                  containerStyle={{
                    marginRight: index === curr.products.length - 1 ? 20 : 0,
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
          ),
        }),
        {},
      )}
    />
  );
};

export default memo(PromoProducts);
