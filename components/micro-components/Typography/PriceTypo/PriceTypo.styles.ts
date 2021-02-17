import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  oldPriceStyle: {
    color: '#767676',
    fontSize: 10,
    fontFamily: 'Quicksand-Light',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  priceStyle: {
    color: COLORS.mainGreen,
    fontSize: 18,
    fontFamily: 'Quicksand-Medium',
  },
});
