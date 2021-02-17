import React, {useState, useEffect} from 'react';
import {Image} from 'react-native';
import {getHalWideBanner} from '../../../../services/hal.service';
import {IHalSlider} from '../../../../types/response-types/hal.types';
import {styles} from './HalWideBanner.styles';

const HalWideBanner = () => {
  const [halWideBanner, setHalWideBanner] = useState<IHalSlider | null>(null);

  useEffect(() => {
    getHalWideBanner().then(({data: {data}}) => {
      setHalWideBanner(data);
    });
  }, []);

  return (
    <>
      {halWideBanner ? (
        <Image source={{uri: halWideBanner.image}} style={styles.image} />
      ) : (
        <></>
      )}
    </>
  );
};

export default HalWideBanner;
