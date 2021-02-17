import React from 'react';
import {Text, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './SingleRecentSearchItem.styles';

const SingleRecentSearchItem: React.FC<{
  searchText: string;
  onPressItem: (text: string) => void;
  containerStyle?: ViewStyle;
}> = ({searchText, onPressItem, containerStyle}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...containerStyle}}
      onPress={() => onPressItem(searchText)}>
      <Text style={styles.text}>{searchText}</Text>
    </TouchableOpacity>
  );
};

export default SingleRecentSearchItem;
