import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  scrollContainer: {padding: 20},
  headerText: {
    color: COLORS.mainGreen,
    fontSize: 22,
  },
  orText: {
    alignItems: 'center',
    ...globalStyles.marginTopTwenty,
  },
  checkboxContainer: {
    paddingRight: 25,
  },
});
