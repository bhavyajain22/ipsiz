import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {styles} from './SingleTimerContainer.styles';

const SingleTimerContainer: React.FC<{
  topText: string | number;
  bottomText: string;
}> = ({topText, bottomText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>{topText}</Text>
      <Text style={styles.bottomText}>{bottomText}</Text>
    </View>
  );
};

export default memo(SingleTimerContainer);
