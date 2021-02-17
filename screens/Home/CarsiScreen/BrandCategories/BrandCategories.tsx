import React, {memo, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styles} from './BrandCategories.styles';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import SingleBrandItem from './SingleBrandItem/SingleBrandItem';
import {IBrandCategory} from '../../../../types/response-types/carsi.types';
import {getBrandCategories} from '../../../../services/carsi.service';

const BrandHorizontalScroll: React.FC = () => {
  // const [brandCategoriesLoading, setBrandCategoriesLoading] = useState<boolean>(
  //   false,
  // );
  const [brandCategories, setBrandCategories] = useState<IBrandCategory[]>([]);

  useEffect(() => {
    getBrandCategories().then(({data: {data}}) => setBrandCategories(data));
    // .finally(() => setBrandCategoriesLoading(false));
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={true}
      horizontal
      contentContainerStyle={globalStyles.paddingTen}
      data={brandCategories}
      keyExtractor={(item) => item.backendName}
      ItemSeparatorComponent={() => <ScrollDivider />}
      renderItem={({item}) => <SingleBrandItem brand={item} />}
    />
  );
};

export default memo(BrandHorizontalScroll);
