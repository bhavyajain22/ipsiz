import React, {memo} from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from './DescriptionTypo.styles';

const DescriptionTypo: React.FC<{text: string; textStyle?: TextStyle}> = ({
  text,
  textStyle,
}) => {
  return <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>;
};

export default memo(DescriptionTypo);
