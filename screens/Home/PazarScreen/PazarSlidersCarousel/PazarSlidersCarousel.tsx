import React, {memo, useEffect, useState} from 'react';
import {Dimensions, Image} from 'react-native';
import {styles} from './PazarSlidersCarousel.styles';
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel';
import {IPazarSlider} from '../../../../types/response-types/pazar.types';
import {getPazarSliders} from '../../../../services/pazar.service';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {changeCategoryAction} from '../../../../store/actions/filtering.actions';

const PazarSlidersCarousel: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [sliders, setSliders] = useState<IPazarSlider[]>([]);

  useEffect(() => {
    getPazarSliders().then(({data: {data}}) => setSliders(data));
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

export default memo(PazarSlidersCarousel);
