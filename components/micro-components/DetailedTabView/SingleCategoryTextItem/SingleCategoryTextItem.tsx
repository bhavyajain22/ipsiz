import {useNavigation} from '@react-navigation/native';
import React, {memo} from 'react';
import {Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {changeCategoryAction} from '../../../../store/actions/filtering.actions';
import {ICategoryItem} from '../../../../types/ICategory.type';

const SingleCategoryTextItem: React.FC<{
  item: ICategoryItem;
  parent: ICategoryItem[];
}> = ({item, parent}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.3}
      onPress={() => {
        if (item.children && item.children.length) {
          (navigation as any).navigate('category_deep_screen', {
            children: item.children,
            parent,
            selectedItem: item,
          });
        } else {
          dispatch(changeCategoryAction(item));
          navigation.navigate('search_stack');
        }
      }}
      // onPress={() => console.log(item.text)}
      style={{
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={{uri: item.imageUrl}}
        style={{height: 50, width: 50, resizeMode: 'cover', borderRadius: 100}}
      />
      <Text
        style={{
          color: '#000000',
          fontFamily: 'Quicksand-Light',
          fontSize: 16,
          paddingLeft: 10,
        }}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(SingleCategoryTextItem);
