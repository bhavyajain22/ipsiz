import React, {memo} from 'react';
import {View, ViewStyle, TouchableOpacity} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {styles} from './StarRatingSelectable.styles';

const StarRatingSelectable: React.FC<{
  rating: number;
  containerStyle?: ViewStyle;
  onRatingSelected: (count: number) => void;
}> = ({rating, containerStyle, onRatingSelected}) => {
  return (
    <View style={{...styles.containerStyle, ...containerStyle}}>
      {Array(rating)
        .fill(null)
        .map((_, index) => (
          <TouchableOpacity onPress={() => onRatingSelected(index + 1)}>
            <FontAwesome5
              key={index}
              solid
              name="star"
              size={25}
              color="#FAEE1C"
            />
          </TouchableOpacity>
        ))}
      {rating < 5 && (
        <>
          {Array(5 - rating)
            .fill(null)
            .map((_, index) => (
              <TouchableOpacity
                onPress={() => onRatingSelected(rating + index + 1)}>
                <FontAwesome5
                  key={index}
                  light
                  name="star"
                  size={25}
                  color="#FAEE1C"
                />
              </TouchableOpacity>
            ))}
        </>
      )}
    </View>
  );
};

export default memo(StarRatingSelectable);
