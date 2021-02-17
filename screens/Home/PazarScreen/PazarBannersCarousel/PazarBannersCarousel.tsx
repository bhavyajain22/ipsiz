import React, {memo, useEffect, useState} from 'react';
import {Image, Dimensions} from 'react-native';
import {styles} from './PazarBannersCarousel.styles';
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel';
import {IPazarBanner} from '../../../../types/response-types/pazar.types';
import {getPazarBanners} from '../../../../services/pazar.service';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {changeCategoryAction} from '../../../../store/actions/filtering.actions';

const PazarBannersCarousel: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [banners, setBanners] = useState<IPazarBanner[]>([]);

  useEffect(() => {
    getPazarBanners().then(({data: {data}}) => setBanners(data));
  }, []);

  return (
    <CustomCarousel
      autoplay
      autoplayInterval={5000}
      data={banners}
      renderItem={({item}) => (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            dispatch(changeCategoryAction(item.category));
            navigation.navigate('search_stack');
          }}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.carouselSingleItem}
          />
        </TouchableOpacity>
      )}
      sliderWidth={(Dimensions.get('window').width * 10) / 10}
      itemWidth={(Dimensions.get('window').width * 8.5) / 10}
      vertical={false}
    />
  );
};

export default memo(PazarBannersCarousel);
