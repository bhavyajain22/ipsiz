import React from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from './H3Typo.styles';

const H3Typo: React.FC<{text: string; textStyle?: TextStyle}> = ({
  text,
  textStyle,
}) => {
  return <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>;
};

export default H3Typo;
