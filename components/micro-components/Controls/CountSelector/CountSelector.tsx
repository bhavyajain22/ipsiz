import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {styles} from './CountSelector.styles';

const CountSelector: React.FC<{
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  maxCount: number;
}> = ({count, onIncrement, onDecrement, maxCount}) => {
  const handleIncrement = () => count + 1 <= maxCount && onIncrement();
  const handleDecrement = () => count - 1 >= 1 && onDecrement();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleDecrement}
        style={styles.decrementButton}>
        <FontAwesome5 name="minus" color="#767676" light size={15} />
      </TouchableOpacity>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>{count}</Text>
      </View>
      <TouchableOpacity
        onPress={handleIncrement}
        style={styles.incrementButton}>
        <FontAwesome5 name="plus" color="#767676" light size={15} />
      </TouchableOpacity>
    </View>
  );
};

export default CountSelector;
