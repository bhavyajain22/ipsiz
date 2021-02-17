import React, {memo, useEffect, useState} from 'react';
import {Dimensions, Image} from 'react-native';
import {styles} from './HalMiddleSlider.styles';
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel';
import {IHalSlider} from '../../../../types/response-types/hal.types';
import {getHalMidSliders} from '../../../../services/hal.service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {changeCategoryAction} from '../../../../store/actions/filtering.actions';

const HalMiddleSlider: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [sliders, setSliders] = useState<IHalSlider[]>([]);

  useEffect(() => {
    getHalMidSliders().then(({data: {data}}) => {
      setSliders(data);
    });
  }, []);

  return (
    <CustomCarousel
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
      contentContainerCustomStyle={{
        ...styles.carouselContainer,
        width: 175 * sliders.length,
      }}
      activeSlideAlignment="start"
      inactiveSlideScale={1}
      inactiveSlideOpacity={1}
      sliderWidth={Dimensions.get('window').width}
      itemWidth={170}
      vertical={false}
    />
  );
};

export default memo(HalMiddleSlider);
