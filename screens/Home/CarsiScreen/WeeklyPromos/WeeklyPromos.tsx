import React, {memo, useEffect, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import {styles} from './WeeklyPromos.styles';
import {IProductRegular} from '../../../../types/IProductRegular.type';
import SingleProductRegular from '../../../../components/shared/SingleProductRegular/SingleProductRegular';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import {getWeeklyPromos} from '../../../../services/carsi.service';

const WeeklyPromos: React.FC = () => {
  // const [weeklyPromosLoading, setWeeklyPromosLoading] = useState<boolean>(
  //   false,
  // );
  const [weeklyPromos, setWeeklyPromos] = useState<IProductRegular[]>([]);

  useEffect(() => {
    getWeeklyPromos().then(({data: {data}}) => setWeeklyPromos(data));
    // .finally(() => setWeeklyPromosLoading(false));
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.flatListContainer}
      style={globalStyles.marginTopTen}
      data={weeklyPromos}
      keyExtractor={(item) => item._id}
      ItemSeparatorComponent={() => <ScrollDivider />}
      renderItem={({item, index}) => (
        <SingleProductRegular
          product={item}
          timeLeftShown={true}
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{
            marginRight: index === weeklyPromos.length - 1 ? 20 : 0,
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

export default memo(WeeklyPromos);
