import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './FeaturesView.styles';

const FeaturesView: React.FC<{
  features: ('free-delivery' | 'fast-delivery' | 'today-delivery' | string)[];
}> = ({features}) => {
  return (
    <View style={styles.container}>
      {features.includes('free-delivery') && (
        <Image
          source={{
            uri:
              'https://www.ipsizcambaz.com/cdn/assets/images/widget_b2c_free_cargo.png',
          }}
          style={styles.featureImage}
        />
      )}
      {features.includes('fast-delivery') && (
        <Image
          source={{
            uri:
              'https://www.ipsizcambaz.com/cdn/assets/images/widget_b2c_fast_cargo.png',
          }}
          style={styles.featureImage}
        />
      )}
      {features.includes('today-delivery') && (
        <Image
          source={{
            uri:
              'https://www.ipsizcambaz.com/cdn/assets/images/widget_b2c_today_cargo.png',
          }}
          style={styles.featureImage}
        />
      )}
    </View>
  );
};

export default FeaturesView;
