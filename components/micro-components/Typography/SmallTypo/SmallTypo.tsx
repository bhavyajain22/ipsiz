import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import {styles} from './SmallTypo.styles';

const SmallTypo: React.FC<
  {
    textStyle?: TextStyle;
    text: string | undefined | null;
  } & TextProps
> = ({textStyle, text, ...textProps}) => {
  return (
    <Text style={{...styles.textStyle, ...textStyle}} {...textProps}>
      {text}
    </Text>
  );
};

export default SmallTypo;
