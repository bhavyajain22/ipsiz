import React, {ReactElement, useEffect, useState} from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import {styles} from './HalCategoryShowcase.styles';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import RegularTabView from '../../../../components/micro-components/RegularTabView/RegularTabView';
import {
  ICategoryShowcase,
  ISubCategory,
} from '../../../../types/response-types/hal.types';
import SingleProductHal from '../../../../components/shared/SingleProductHal/SingleProductHal';
import {COLORS} from '../../../../assets/colors';
import {getHalCategoryShowcases} from '../../../../services/hal.service';
import SideCard from '../../../../components/SideCard/SideCard';
import IconCircle from '../../../../components/IconCircle/IconCircle';
import HeaderTypo from '../../../../components/micro-components/Typography/HeaderTypo/HeaderTypo';

const HalCategoryShowcase: React.FC = () => {
  const [categoryShowcases, setCategoryShowcases] = useState<
    ICategoryShowcase[]
  >([]);
  useEffect(() => {
    getHalCategoryShowcases().then(({data: {data}}) =>
      setCategoryShowcases(data),
    );
  }, []);

  return (
    <>
      {categoryShowcases.map((category) => (
        <View key={category.categoryId} style={globalStyles.marginTopTen}>
          <SideCard>
            <View style={styles.cardHeaderContainer}>
              <IconCircle iconName="star" containerColor="#5c6c81" />
              <HeaderTypo
                textStyle={globalStyles.marginLeftTen}
                text={category.categoryName}
              />
            </View>

            <RegularTabView
              scrollEnabled={true}
              startingIndex={0}
              tabActiveColor={COLORS.mainDark}
              tabInactiveColor={COLORS.midGray}
              routes={category.subCategories.map(({name}) => ({
                key: name,
                title: name,
              }))}
              scenesObj={category.subCategories.reduce(
                (
                  prev: {[key: string]: () => ReactElement},
                  curr: ISubCategory,
                ) => ({
                  ...prev,
                  [curr.name]: () => (
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      horizontal
                      style={globalStyles.marginTopTwenty}
                      contentContainerStyle={[
                        globalStyles.marginLeftFive,
                        globalStyles.marginBottomTen,
                      ]}
                      data={Object.values(curr.products)}
                      keyExtractor={(item) => item.title}
                      ItemSeparatorComponent={() => <ScrollDivider />}
                      renderItem={({item, index}) =>
                        index !== Object.values(curr.products).length - 1 ? (
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
                                width:
                                  Dimensions.get('window').width / 2.01 - 15,
                              }}
                              imageContainerStyle={{
                                width: Dimensions.get('window').width / 2.5 - 1,
                              }}
                              imageStyle={{
                                width:
                                  Dimensions.get('window').width / 2.5 - 15,
                              }}
                            />
                            <ScrollDivider />
                            <ScrollDivider />
                          </>
                        )
                      }
                    />
                  ),
                }),
                {},
              )}
            />
          </SideCard>
        </View>
      ))}
    </>
  );
};

export default HalCategoryShowcase;
