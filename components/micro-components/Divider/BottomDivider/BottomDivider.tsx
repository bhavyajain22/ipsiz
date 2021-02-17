import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './BottomDivider.styles';

const BottomDivider = () => {
  return <View style={styles.mainStyle} />;
};

export default memo(BottomDivider);
