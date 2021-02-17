import React, {useEffect, useState, memo} from 'react';
import {Dimensions, Image} from 'react-native';
import {styles} from './SlidersCarousel.styles';
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel';
import {ISlider} from '../../../../types/response-types/carsi.types';
import {getCarsiSliders} from '../../../../services/carsi.service';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {changeCategoryAction} from '../../../../store/actions/filtering.actions';

const SlidersCarousel: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [slidersLoading, setSlidersLoading] = useState<boolean>(false);
  const [sliders, setSliders] = useState<ISlider[]>([]);
  useEffect(() => {
    getCarsiSliders().then(({data: {data}}) => setSliders(data));
    // .finally(() => setSlidersLoading(false));
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

export default memo(SlidersCarousel);
