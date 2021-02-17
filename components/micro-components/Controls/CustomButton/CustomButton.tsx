import React from 'react';
import {Text, ViewStyle, TextStyle, ColorValue, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import {styles} from './CustomButton.styles';
import {BallIndicator} from 'react-native-indicators';

const CustomButton: React.FC<{
  icon?: {
    iconName: string;
    iconType: 'light' | 'regular' | 'solid' | 'brand';
    iconSize: number;
    iconColor: string;
  };
  loading?: boolean;
  text: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  color: ColorValue;
  textColor?: ColorValue;
  outlined?: boolean;
  onPress?: () => any;
}> = ({
  icon,
  text,
  containerStyle,
  textStyle,
  loading,
  color,
  textColor,
  outlined,
  onPress,
}) => {
  return (
    <View style={{...containerStyle}}>
      <TouchableOpacity
        onPress={onPress}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.buttonStyle,
          backgroundColor: outlined ? 'transparent' : color,
          ...(outlined && {borderWidth: 1, borderColor: color}),
        }}>
        {loading && (
          <View style={styles.loadingIndicatorContainer}>
            <BallIndicator size={20} color={textColor as string} />
          </View>
        )}

        {icon && (
          <FontAwesome5
            name={icon.iconName}
            color={icon.iconColor}
            size={icon.iconSize}
            style={globalStyles.marginRightTen}
            light={icon.iconType === 'light'}
            regular={icon.iconType === 'regular'}
            solid={icon.iconType === 'solid'}
            brand={icon.iconType === 'brand'}
          />
        )}
        <Text style={{...styles.textStyle, ...textStyle, color: textColor}}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
