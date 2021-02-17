import React, {memo} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './CategoryHorizontalScroll.styles';
import {Ionicons} from '@expo/vector-icons';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import {ICategoryItem} from '../../types/ICategory.type';
import {changeCategoryAction} from '../../store/actions/filtering.actions';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CategoryHorizontalScroll = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const categories: ICategoryItem[] = useSelector(
    (state: RootState) => state.CategoryReducer.categories,
  );

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.scrollStyle}>
      <View style={styles.scrollContentStyle}>
        {categories.map((category) => (
          <TouchableOpacity
            activeOpacity={0.9}
            key={category.id}
            onPress={() => {
              dispatch(changeCategoryAction(category));
              navigation.navigate('search_stack');
            }}
            style={styles.touchableStyle}>
            <View style={styles.iconContainerStyle}>
              <Ionicons
                name={category.iconName}
                light
                size={25}
                color="#767676"
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{category.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default memo(CategoryHorizontalScroll);
