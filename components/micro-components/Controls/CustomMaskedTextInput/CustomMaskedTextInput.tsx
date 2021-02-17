import React from 'react';
import {TextStyle} from 'react-native';
import {styles} from './CustomMaskedTextInput.styles';
import {
  TextInputMask,
  TextInputMaskProps,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

// TODO: GETTING RAW VALUE SUPPORT WILL BE ADDED.
const CustomMaskedTextInput: React.FC<{
  textInputProps?: Omit<TextInputMaskProps, 'type'>;
  type: TextInputMaskTypeProp;
  style?: TextStyle;
}> = ({textInputProps, style, type}) => {
  return (
    <TextInputMask
      type={type}
      style={{...styles.textInputStyle, ...style}}
      placeholderTextColor="#ababab"
      {...textInputProps}
    />
  );
};

export default CustomMaskedTextInput;
