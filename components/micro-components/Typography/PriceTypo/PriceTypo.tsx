import React from 'react';
import {View, Text, ViewStyle} from 'react-native';
import {styles} from './PriceTypo.styles';

const PriceTypo: React.FC<{
  oldPrice?: string | number;
  price: string | number;
  containerStyle?: ViewStyle;
}> = ({oldPrice, price, containerStyle}) => {
  return (
    <View style={containerStyle}>
      {oldPrice ? (
        <Text style={styles.oldPriceStyle}>
          {oldPrice} {oldPrice && 'TL'}
        </Text>
      ) : (
        <></>
      )}
      <Text style={styles.priceStyle}>{price} TL</Text>
    </View>
  );
};

export default PriceTypo;
