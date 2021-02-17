import React, {memo} from 'react';
import {ColorValue, View} from 'react-native';
import {styles} from './IconCircle.styles';
import {FontAwesome5} from '@expo/vector-icons';

const IconCircle: React.FC<{
  iconName: string;
  containerColor: ColorValue;
}> = ({iconName, containerColor}) => {
  return (
    <View style={{...styles.mainContainer, backgroundColor: containerColor}}>
      <FontAwesome5 solid name={iconName} size={10} color="#ffffff" />
    </View>
  );
};

export default memo(IconCircle);
