import React from 'react';
import {View} from 'react-native';
import {styles} from './StockView.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';

const StockView: React.FC<{count: number}> = ({count}) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="box-open" light size={20} color={COLORS.mainGreen} />
      <DescriptionTypo text={`Stok (${count})`} textStyle={styles.textStyle} />
    </View>
  );
};

export default StockView;
