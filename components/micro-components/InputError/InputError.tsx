import React from 'react';
import {Text} from 'react-native';
import CustomFadeInView from '../CustomFadeInView/CustomFadeInView';
import {styles} from './InputError.styles';

const InputError: React.FC<{
  errorText: string;
  errorShown: boolean | undefined;
}> = ({errorText, errorShown}) => {
  return errorShown ? (
    <CustomFadeInView>
      <Text style={styles.text}>{errorText}</Text>
    </CustomFadeInView>
  ) : (
    <></>
  );
};

export default InputError;
