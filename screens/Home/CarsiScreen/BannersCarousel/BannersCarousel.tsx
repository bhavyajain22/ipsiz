import React, {memo, useEffect, useState} from 'react';
import {Image, Dimensions} from 'react-native';
import {styles} from './BannersCarousel.styles';
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel';
import {IBanner} from '../../../../types/response-types/carsi.types';
import {getCarsiBanners} from '../../../../services/carsi.service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {changeCategoryAction} from '../../../../store/actions/filtering.actions';
import {useNavigation} from '@react-navigation/native';

const BannersCarousel: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [bannersLoading, setBannersLoading] = useState<boolean>(false);
  const [banners, setBanners] = useState<IBanner[]>([]);

  useEffect(() => {
    getCarsiBanners().then(({data: {data}}) => setBanners(data));
    // .finally(() => setBannersLoading(false));
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

export default memo(BannersCarousel);
