import React, {memo} from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from './HeaderTypo.styles';

const HeaderTypo: React.FC<{text: string; textStyle: TextStyle}> = ({
  text,
  textStyle,
}) => {
  return <Text style={{...styles.headerStyle, ...textStyle}}>{text}</Text>;
};

export default memo(HeaderTypo);
