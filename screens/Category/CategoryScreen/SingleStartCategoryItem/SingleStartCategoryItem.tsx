import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image} from 'react-native';
import {styles} from './SingleStartCategoryItem.styles';
import {ICategoryItem} from '../../../../types/ICategory.type';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SingleStartCategoryItem: React.FC<{
  item: ICategoryItem;
  parent: ICategoryItem[];
}> = ({item, parent}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() =>
        (navigation as any).navigate('category_deep_screen', {
          children: item.children,
          parent,
          selectedItem: item,
        })
      }
      style={styles.itemWrapper}>
      <Image source={{uri: item.imageUrl}} style={styles.image} />
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default SingleStartCategoryItem;
