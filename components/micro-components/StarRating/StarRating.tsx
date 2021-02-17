import React from 'react';
import {View, ViewStyle} from 'react-native';
import {styles} from './StarRating.styles';
import { FontAwesome5 } from '@expo/vector-icons';

const StarRating: React.FC<{
  rating: number;
  reviewCount: number | string;
  containerStyle?: ViewStyle;
}> = ({rating, containerStyle}) => {
  return (
    <View style={{...styles.containerStyle, ...containerStyle}}>
      {Array(rating)
        .fill(null)
        .map((_, index) => (
          <FontAwesome5
            key={index}
            solid
            name="star"
            size={12}
            color="#FAEE1C"
          />
        ))}
      {rating < 5 && (
        <>
          {Array(5 - rating)
            .fill(null)
            .map((_, index) => (
              <FontAwesome5
                key={index}
                light
                name="star"
                size={12}
                color="#FAEE1C"
              />
            ))}
        </>
      )}

      {/* <Text style={styles.reviewCountText}>({reviewCount})</Text> */}
    </View>
  );
};

export default StarRating;
