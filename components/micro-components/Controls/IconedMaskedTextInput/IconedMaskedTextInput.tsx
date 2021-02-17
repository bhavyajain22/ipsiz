import React from 'react';
import {View, TextStyle, ViewStyle} from 'react-native';
import {styles} from './IconedMaskedTextInput.styles';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {
  TextInputMask,
  TextInputMaskProps,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

const IconedMaskedTextInput: React.FC<{
  textInputProps?: Omit<TextInputMaskProps, 'type'>;
  style?: TextStyle;
  type: TextInputMaskTypeProp;
  iconName: string;
  containerStyle?: ViewStyle;
}> = ({textInputProps, style, iconName, type, containerStyle}) => {
  return (
    <View style={{...styles.mainContainer, ...containerStyle}}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name={iconName} size={30} color={COLORS.mainGreen} />
      </View>
      <TextInputMask
        style={{...styles.textInputStyle, ...style}}
        type={type}
        placeholderTextColor="#ababab"
        {...textInputProps}
      />
    </View>
  );
};

export default IconedMaskedTextInput;
