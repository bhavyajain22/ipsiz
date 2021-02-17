import React from 'react';
import {TextInput, TextStyle, TextInputProps} from 'react-native';
import {styles} from './CustomTextInput.styles';

const CustomTextInput: React.FC<{
  textInputProps: TextInputProps;
  style?: TextStyle;
}> = ({textInputProps, style}) => {
  return (
    <TextInput
      style={{...styles.textInputStyle, ...style}}
      placeholderTextColor="#ababab"
      {...textInputProps}
    />
  );
};

export default CustomTextInput;
