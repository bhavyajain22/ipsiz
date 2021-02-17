import React, {memo, useEffect, useState} from 'react';
import {View, Image} from 'react-native';
import {getPazarWideBanner} from '../../../../services/pazar.service';
import {IPazarWideBanner} from '../../../../types/response-types/pazar.types';
import PazarBannerTimer from './PazarBannerTimer/PazarBannerTimer';
import {styles} from './PazarWideBanner.styles';

const PazarWideBanner = () => {
  const [banner, setBanner] = useState<IPazarWideBanner | null>(null);

  useEffect(() => {
    getPazarWideBanner().then(({data: {data}}) => setBanner(data));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{uri: banner?.imageUrl}} style={styles.image} />
      <View style={styles.timerContainer}>
        <PazarBannerTimer />
      </View>
    </View>
  );
};

export default memo(PazarWideBanner);
