import React, {memo, ReactElement, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styles} from './BestSellerCategories.styles';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import RegularTabView from '../../../../components/micro-components/RegularTabView/RegularTabView';
import SingleCategoryCard from '../../../../components/shared/SingleCategoryCard/SingleCategoryCard';
import {IBestSellerSection} from '../../../../types/response-types/carsi.types';
import {COLORS} from '../../../../assets/colors';
import {getBestSellerCategories} from '../../../../services/carsi.service';

const BestSellerCategories: React.FC = () => {
  // const [
  //   bestSellerCategoriesLoading,
  //   setBestSellerCategoriesLoading,
  // ] = useState<boolean>(false);
  const [bestSellerCategories, setBestSellerCategories] = useState<
    IBestSellerSection[]
  >([]);

  useEffect(() => {
    getBestSellerCategories().then(({data: {data}}) =>
      setBestSellerCategories(data),
    );
    // .finally(() => setBestSellerCategoriesLoading(false));
  }, []);

  return (
    <RegularTabView
      scrollEnabled={true}
      startingIndex={0}
      tabActiveColor={COLORS.mainGreen}
      tabInactiveColor={COLORS.midGray}
      routes={bestSellerCategories.map(({name}) => ({
        key: name,
        title: name,
      }))}
      scenesObj={bestSellerCategories.reduce(
        (
          prev: {[key: string]: () => ReactElement},
          curr: IBestSellerSection,
        ) => ({
          ...prev,
          [curr.name]: () => (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              style={globalStyles.marginTopTen}
              contentContainerStyle={[
                globalStyles.marginLeftFive,
                globalStyles.marginBottomTen,
              ]}
              data={Object.values(curr.showcases)}
              keyExtractor={(item) => item.imageUrl as string}
              ItemSeparatorComponent={() => <ScrollDivider />}
              renderItem={({item, index}) => (
                <SingleCategoryCard
                  category={item}
                  // eslint-disable-next-line react-native/no-inline-styles
                  containerStyle={{
                    marginRight:
                      index === Object.values(curr.showcases).length - 1
                        ? 20
                        : 0,
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

export default memo(BestSellerCategories);
