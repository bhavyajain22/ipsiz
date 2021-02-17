import React, {memo, useEffect, useState} from 'react';
import {Dimensions, Image} from 'react-native';
import {styles} from './HalSlidersCarousel.styles';
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel';
import {IHalSlider} from '../../../../types/response-types/hal.types';
import {getHalSliders} from '../../../../services/hal.service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {changeCategoryAction} from '../../../../store/actions/filtering.actions';

const HalSlidersCarousel: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [sliders, setSliders] = useState<IHalSlider[]>([]);

  useEffect(() => {
    getHalSliders().then(({data: {data}}) => {
      setSliders(data);
    });
  }, []);

  return (
    <CustomCarousel
      autoplay
      autoplayInterval={5000}
      autoplayDelay={1500}
      keyExtractor={(item) => item.image}
      data={sliders}
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
      itemWidth={(Dimensions.get('window').width * 9.5) / 10}
      vertical={false}
    />
  );
};

export default memo(HalSlidersCarousel);
