import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 30,
    alignItems: 'flex-end',
  },
  text: {
    color: COLORS.mainGreen,
  },
  touchable: {
    flexDirection: 'row',
  },
});
