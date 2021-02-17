import React from 'react';
import {Text} from 'react-native';
import {styles} from './ShopNameTypo.styles';

const ShopNameTypo: React.FC<{text: string}> = ({text}) => {
  return (
    <Text style={styles.textStyle}>
      {text.length > 30 ? `${text.slice(0, 30)}...` : text}
    </Text>
  );
};

export default ShopNameTypo;
