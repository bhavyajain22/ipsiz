import React from 'react';
import {View} from 'react-native';
import {styles} from './PazarStockView.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';

const PazarStockView: React.FC<{count: number}> = ({count}) => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="box-open" light size={20} color={COLORS.mainPurple} />
      <DescriptionTypo text={`Stok (${count})`} textStyle={styles.textStyle} />
    </View>
  );
};

export default PazarStockView;
