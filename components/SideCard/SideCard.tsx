import React, {ReactNode, memo} from 'react';
import {View, ViewStyle} from 'react-native';
import {styles} from './SideCard.styles';

const SideCard: React.FC<{children: ReactNode; containerStyle?: ViewStyle}> = ({
  children,
  containerStyle,
}) => {
  return (
    <View style={{...styles.mainContainer, ...containerStyle}}>{children}</View>
  );
};

export default memo(SideCard);
