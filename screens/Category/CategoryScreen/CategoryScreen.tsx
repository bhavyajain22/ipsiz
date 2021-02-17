import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {styles} from './CategoryScreen.styles';
import {globalStyles} from '../../../assets/globalStyles.styles';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducers';
import SingleStartCategoryItem from './SingleStartCategoryItem/SingleStartCategoryItem';

function CategoryScreen() {
  const categories = useSelector(
    (state: RootState) => state.CategoryReducer.categories,
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Kategoriler</Text>
      <FlatList
        contentContainerStyle={styles.listContainer}
        style={globalStyles.marginTopTwenty}
        data={categories}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <SingleStartCategoryItem item={item} parent={categories} />
        )}
        ListFooterComponent={<BottomDivider />}
      />
    </View>
  );
}

export default CategoryScreen;
