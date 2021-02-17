import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {TouchableOpacity, Image, ViewStyle, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {changeCategoryAction} from '../../../store/actions/filtering.actions';
import {ICategoryItem} from '../../../types/ICategory.type';
import H3Typo from '../../micro-components/Typography/H3Typo/H3Typo';
import H4Typo from '../../micro-components/Typography/H4Typo/H4Typo';
import {styles} from './SingleCategoryCard.styles';

const SingleCategoryCard: React.FC<{
  category: ICategoryItem;
  containerStyle?: ViewStyle;
}> = ({category, containerStyle}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <View style={{...styles.mainContainer, ...containerStyle}}>
      <TouchableOpacity
        style={styles.touchableContainer}
        onPress={() => {
          dispatch(changeCategoryAction(category));
          navigation.navigate('search_stack');
        }}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: category.imageUrl as string,
          }}
        />
        <H3Typo text={category.text} textStyle={styles.categoryText} />
        <H4Typo text="En Uygun Fiyatlarla" textStyle={styles.subText} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(SingleCategoryCard);
