import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    ...globalStyles.smallShadow,
    padding: 10,
    borderRadius: 5,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    color: COLORS.midGray,
    fontFamily: 'Quicksand-Light',
    fontSize: 18,
  },
  totalText: {
    color: COLORS.midGray,
    fontFamily: 'Quicksand-Light',
    fontSize: 18,
  },
  totalPriceText: {
    color: COLORS.mainGreen,
    fontFamily: 'Quicksand-Regular',
  },
  detailsTouchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsText: {
    color: COLORS.mainGreen,
    fontFamily: 'Quicksand-Regular',
    paddingLeft: 5,
    fontSize: 18,
  },
  statusText: {
    color: COLORS.mainGreen,
    fontSize: 15,
    fontFamily: 'Quicksand-Light',
    marginTop: 20,
  },
  productsScroll: {
    marginTop: 10,
    flexDirection: 'row',
  },
  productImage: {
    height: 70,
    width: 70,
    borderRadius: 7,
    borderWidth: 0.5,
    borderColor: '#ababab',
  },
  productDivider: {
    width: 80,
  },
});
