import React from 'react';
import {
  View,
  TextInputProps,
  TextStyle,
  TextInput,
  ViewStyle,
} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {styles} from './IconedTextInput.styles';

const IconedTextInput: React.FC<{
  textInputProps: TextInputProps;
  style?: TextStyle;
  iconName: string;
  containerStyle?: ViewStyle;
}> = ({textInputProps, style, iconName, containerStyle}) => {
  return (
    <View style={{...styles.mainContainer, ...containerStyle}}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconName} size={30} color={COLORS.mainGreen} />
      </View>
      <TextInput
        style={{...styles.textInputStyle, ...style}}
        placeholderTextColor="#ababab"
        {...textInputProps}
      />
    </View>
  );
};

export default IconedTextInput;
