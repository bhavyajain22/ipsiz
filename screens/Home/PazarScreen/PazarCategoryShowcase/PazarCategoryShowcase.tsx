import React, {memo, ReactElement, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import RegularTabView from '../../../../components/micro-components/RegularTabView/RegularTabView';
import SingleCategoryCard from '../../../../components/shared/SingleCategoryCard/SingleCategoryCard';
import {getPazarCategoryShowcase} from '../../../../services/pazar.service';
import {IPazarSingleCategoryShowcase} from '../../../../types/response-types/pazar.types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styles} from './PazarCategoryShowcase.styles';

const PazarCategoryShowcase = () => {
  const [showcaseItems, setShowcaseItems] = useState<
    IPazarSingleCategoryShowcase[]
  >([]);

  useEffect(() => {
    getPazarCategoryShowcase().then(({data: {data}}) => setShowcaseItems(data));
  }, []);

  return (
    <RegularTabView
      scrollEnabled={true}
      startingIndex={0}
      tabActiveColor={COLORS.mainPurple}
      tabInactiveColor={COLORS.midGray}
      routes={showcaseItems.map(({text}) => ({
        key: text,
        title: text,
      }))}
      scenesObj={showcaseItems.reduce(
        (
          prev: {[key: string]: () => ReactElement},
          curr: IPazarSingleCategoryShowcase,
        ) => ({
          ...prev,
          [curr.text]: () => (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              style={globalStyles.marginTopTen}
              contentContainerStyle={[
                globalStyles.marginLeftFive,
                globalStyles.marginBottomTen,
              ]}
              data={Object.values(curr.children)}
              keyExtractor={(item) => item.imageUrl as string}
              ItemSeparatorComponent={() => <ScrollDivider />}
              renderItem={({item, index}) => (
                <SingleCategoryCard
                  category={item}
                  // eslint-disable-next-line react-native/no-inline-styles
                  containerStyle={{
                    paddingBottom: 20,
                    marginRight:
                      index === Object.values(curr.children).length - 1
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

export default memo(PazarCategoryShowcase);
