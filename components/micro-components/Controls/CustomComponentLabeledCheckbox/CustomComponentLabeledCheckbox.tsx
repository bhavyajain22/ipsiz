import React, {ReactElement} from 'react';
import {ViewStyle, TouchableOpacity, Platform} from 'react-native';
import {styles} from './CustomComponentLabeledCheckbox.styles';
import CheckBox, {CheckBoxProps} from '@react-native-community/checkbox';
import {COLORS} from '../../../../assets/colors';

const CustomComponentLabeledCheckbox: React.FC<
  CheckBoxProps & {
    containerStyle?: ViewStyle;
    component: ReactElement;
  }
> = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.onValueChange(!props.value)}
      style={{...props.containerStyle, ...styles.checkboxContainer}}>
      <CheckBox
        onCheckColor={COLORS.mainGreen}
        onTintColor={COLORS.mainGreen}
        disabled={false}
        value={props.value}
        onValueChange={
          Platform.OS === 'android' ? props.onValueChange : () => null
        }
        boxType={props.boxType}
      />
      {props.component}
    </TouchableOpacity>
  );
};

export default CustomComponentLabeledCheckbox;
