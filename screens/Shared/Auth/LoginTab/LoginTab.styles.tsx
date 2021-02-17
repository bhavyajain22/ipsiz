import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  headerText: {
    color: COLORS.mainGreen,
    fontSize: 22,
  },
  orText: {
    alignItems: 'center',
    ...globalStyles.marginTopTwenty,
  },
});
