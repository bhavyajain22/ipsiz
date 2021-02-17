import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    borderColor: COLORS.mainPurple,
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 5,
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.mainPurple,
    paddingLeft: 10,
    fontSize: 15,
    fontFamily: 'Quicksand-Regular',
  },
});
