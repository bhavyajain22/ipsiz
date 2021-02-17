import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {styles} from './SingleSearchItem.styles';

const SingleSearchItem: React.FC<{
  searchText: string;
  onPressItem: (text: string) => void;
}> = ({searchText, onPressItem}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.itemContainer}
      onPress={() => onPressItem(searchText)}>
      <View style={styles.iconContainer}>
        <FontAwesome5
          name="search"
          light
          size={12}
          color={COLORS.midGray}
        />
      </View>
      <Text style={styles.text}>{searchText}</Text>
    </TouchableOpacity>
  );
};

export default SingleSearchItem;
