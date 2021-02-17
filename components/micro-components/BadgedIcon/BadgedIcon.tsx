import React from 'react';
import {View, ViewStyle, ColorValue, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import  {MaterialCommunityIcons,
  FontAwesome5ProIconProps,
} from '@expo/vector-icons';
import {styles} from './BadgedIcon.styles';

const BadgedIcon: React.FC<
  FontAwesome5ProIconProps & {
    containerStyle?: ViewStyle;
    badgeCount: number;
    badgeBackgroundColor: ColorValue;
    onPress: () => any;
  }
> = ({containerStyle, badgeCount, badgeBackgroundColor, onPress, ...props}) => {
  return (
    <View style={{...styles.mainView, ...containerStyle}}>
      <TouchableOpacity
        onPress={onPress}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: props?.size ? props.size + 10 : 20,
          height: props.size ? props.size + 10 : 30,
        }}>
        <MaterialCommunityIcons
          name={props.name}
          size={props.size}
          light={props.light}
          color={props.color}
        />
        <View
          style={{
            ...styles.badgeContainer,
            backgroundColor: badgeBackgroundColor,
          }}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BadgedIcon;
