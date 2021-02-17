import React from 'react';
import {TextStyle, ViewStyle, TouchableOpacity, Platform} from 'react-native';
import {styles} from './CustomCheckbox.styles';
import CheckBox, {CheckBoxProps} from '@react-native-community/checkbox';
import SmallTypo from '../../Typography/SmallTypo/SmallTypo';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';

const CustomCheckbox: React.FC<
  CheckBoxProps & {
    containerStyle?: ViewStyle;
    text: string;
    textStyle?: TextStyle;
    checkboxColor?: string;
  }
> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onValueChange(!props.value)}
      style={{...props.containerStyle, ...styles.checkboxContainer}}>
      <CheckBox
        onCheckColor={props.checkboxColor || COLORS.mainGreen}
        onTintColor={props.checkboxColor || COLORS.mainGreen}
        disabled={false}
        value={props.value}
        onValueChange={
          Platform.OS === 'android' ? props.onValueChange : () => null
        }
        boxType={props.boxType}
        hideBox={props.hideBox}
      />
      <SmallTypo
        text={props.text}
        textStyle={{...globalStyles.marginLeftTen, ...props.textStyle}}
      />
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
