import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: COLORS.mainBackground,
    flex: 1,
  },
  firstCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    ...globalStyles.smallShadow,
    marginTop: 20,
    alignItems: 'center',
    padding: 10,
  },
  firstCardTextLight: {
    fontSize: 22,
    fontFamily: 'Quicksand-Light',
    color: '#767676',
  },
  firstCardTextRegular: {
    fontSize: 22,
    fontFamily: 'Quicksand-Regular',
    color: '#767676',
  },
  totalPointsContainer: {
    backgroundColor: COLORS.mainGreen,
    height: 100,
    width: 100,
    borderRadius: 5,
    ...globalStyles.smallShadow,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalPointsText: {
    color: 'white',
    fontFamily: 'Quicksand-Regular',
    fontSize: 47,
  },
  secondCard: {
    backgroundColor: 'white',
    ...globalStyles.smallShadow,
    marginTop: 20,
    padding: 10,
  },
  processContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  singleProcess: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  orderText: {
    fontSize: 90,
    fontFamily: 'Quicksand-Bold',
    color: COLORS.mainGreen,
  },
  processImage: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },
  processTextContainer: {
    width: 100,
  },
  processText: {
    textAlign: 'center',
    fontFamily: 'Quicksand-Regular',
    color: COLORS.mainGreen,
  },
  thirdCard: {
    backgroundColor: 'white',
    ...globalStyles.smallShadow,
    marginTop: 20,
    padding: 10,
  },
});
