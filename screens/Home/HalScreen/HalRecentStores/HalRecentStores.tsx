import React, {memo, useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {styles} from './HalRecentStores.styles';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import ScrollDivider from '../../../../components/micro-components/Divider/ScrollDivider/ScrollDivider';
import {IStore} from '../../../../types/IStore.type';
import SingleStore from '../../../../components/shared/SingleStore/SingleStore';
import {getHalRecentStores} from '../../../../services/hal.service';

const HalRecentStores: React.FC = () => {
  const [recentStores, setRecentStores] = useState<IStore[]>([]);

  useEffect(() => {
    getHalRecentStores().then(({data: {data}}) => setRecentStores(data));
  }, []);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={styles.flatListContainer}
      style={globalStyles.marginTopTwenty}
      data={recentStores}
      keyExtractor={(item) => item.title}
      ItemSeparatorComponent={() => <ScrollDivider />}
      renderItem={({item, index}) => (
        <SingleStore
          store={item}
          // eslint-disable-next-line react-native/no-inline-styles
          containerStyle={{
            marginRight: index === recentStores.length - 1 ? 20 : 0,
          }}
        />
      )}
    />
  );
};

export default memo(HalRecentStores);
