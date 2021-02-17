import React, {memo, ReactElement, useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import RegularTabView from '../../../../components/micro-components/RegularTabView/RegularTabView';
import SingleProductPazar from '../../../../components/shared/SingleProductPazar/SingleProductPazar';
import SideCard from '../../../../components/SideCard/SideCard';
import {getPazarMainTabs} from '../../../../services/pazar.service';
import {IPazarMainTab} from '../../../../types/response-types/pazar.types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styles} from './PazarTabProducts.styles';

const PazarTabProducts: React.FC = () => {
  const [mainTabs, setMainTabs] = useState<IPazarMainTab[]>([]);

  useEffect(() => {
    getPazarMainTabs().then(({data}) => setMainTabs(data));
  }, []);

  return (
    <SideCard>
      {/* <View style={styles.cardHeaderContainer}>
        <IconCircle iconName="star" containerColor={COLORS.mainPurple} />
        <HeaderTypo
          textStyle={globalStyles.marginLeftTen}
          text="Müthiş Pazardakiler"
        />
      </View> */}
      <RegularTabView
        tabActiveColor={COLORS.mainPurple}
        tabInactiveColor={'#ababab'}
        scrollEnabled={true}
        startingIndex={0}
        routes={mainTabs.map(({title}) => ({
          key: title,
          title: title,
        }))}
        scenesObj={mainTabs.reduce(
          (prev: {[key: string]: () => ReactElement}, curr: IPazarMainTab) => ({
            ...prev,
            [curr.title]: () => (
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                style={globalStyles.marginTopTwenty}
                contentContainerStyle={[
                  globalStyles.marginLeftFive,
                  globalStyles.marginBottomTen,
                ]}
                data={curr.data}
                keyExtractor={(item) => item._id}
                ItemSeparatorComponent={() => <ScrollDivider />}
                renderItem={({item, index}) => (
                  <SingleProductPazar
                    product={item}
                    // eslint-disable-next-line react-native/no-inline-styles
                    containerStyle={{
                      marginRight: index === curr.data.length - 1 ? 20 : 0,
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
    </SideCard>
  );
};

export default memo(PazarTabProducts);
