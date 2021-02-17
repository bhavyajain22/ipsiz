import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    height: 400,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  singleStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.mainDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lineItem: {
    width: 40,
    marginLeft: 5,
    borderTopWidth: 1,
    borderTopColor: '#ababab',
  },
});
