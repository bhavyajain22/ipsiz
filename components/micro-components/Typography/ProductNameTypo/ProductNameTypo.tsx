import React from 'react';
import {Text, TextStyle} from 'react-native';
import {styles} from './ProductNameTypo.styles';

const ProductNameTypo: React.FC<{
  type?: string;
  text: string;
  textStyle?: TextStyle;
  truncateLimit?: number;
}> = ({type, text, textStyle, truncateLimit}) => {
  return type === 'list' ? (
    <Text numberOfLines={2} style={{...styles.textStyle, ...textStyle}} >
      {text}
    </Text>
  ) : (
    <Text numberOfLines={1} style={{...styles.textStyle, ...textStyle,paddingHorizontal:50}}>
      {text}
    </Text>
  );
};

export default ProductNameTypo;
