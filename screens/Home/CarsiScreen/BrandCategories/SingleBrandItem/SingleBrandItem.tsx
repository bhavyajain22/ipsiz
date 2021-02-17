import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeCategoryAction} from '../../../../../store/actions/filtering.actions';
import {IBrandCategory} from '../../../../../types/response-types/carsi.types';
import {styles} from './SingleBrandItem.styles';

const SingleBrandItem: React.FC<{brand: IBrandCategory}> = ({brand}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: brand.image.listImage,
        }}
        style={styles.image}
      />
      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.headerText}>{brand.title}</Text>
          <Text style={styles.descriptionText}>{brand.description}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            dispatch(changeCategoryAction(brand.category));
            navigation.navigate('search_stack');
          }}
          style={styles.touchable}>
          <Text style={styles.seeMoreText}>Daha Fazla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default memo(SingleBrandItem);
