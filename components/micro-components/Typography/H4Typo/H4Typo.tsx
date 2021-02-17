import React from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from './H4Typo.styles';

const H4Typo: React.FC<{text: string; textStyle?: TextStyle}> = ({
  text,
  textStyle,
}) => {
  return <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>;
};

export default H4Typo;
