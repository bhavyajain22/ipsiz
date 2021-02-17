import React, {memo} from 'react';
import {View} from 'react-native';
import {styles} from './SingleVerificationDigit.styles';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import {COLORS} from '../../../../assets/colors';

const SingleVerificationDigit: React.FC<{
  text: string | undefined | null;
}> = ({text}) => {
  return (
    <View style={styles.singleDigitContainer}>
      {text ? (
        <DescriptionTypo text={text} textStyle={styles.text} />
      ) : (
        <DescriptionTypo
          text={'a'}
          // eslint-disable-next-line react-native/no-inline-styles
          textStyle={{...styles.text, color: 'white'}}
        />
      )}

      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.line,
          backgroundColor: text ? COLORS.mainGreen : COLORS.mainDark,
          height: text ? 2 : 1,
        }}
      />
    </View>
  );
};

export default memo(SingleVerificationDigit);
