import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import DetailedTabView from '../../../components/micro-components/DetailedTabView/DetailedTabView';
import {ICategoryItem} from '../../../types/ICategory.type';
import {styles} from './CategoryDeepScreen.styles';

type ICategoryStackParamList = {
  category_screen: undefined;
  category_deep_screen: {
    selectedItem: ICategoryItem;
    children: ICategoryItem[];
    parent: ICategoryItem[];
  };
};

const CategoryDeepScreen: React.FC<{
  navigation: StackNavigationProp<
    ICategoryStackParamList,
    'category_deep_screen'
  >;
  route: RouteProp<ICategoryStackParamList, 'category_deep_screen'>;
}> = ({route}) => {
  const {selectedItem, parent} = route.params;

  return (
    <View style={styles.container}>
      <DetailedTabView tabItems={parent} selectedItem={selectedItem} />
    </View>
  );
};

export default CategoryDeepScreen;
