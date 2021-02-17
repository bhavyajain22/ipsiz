import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  topDivider: {
    height: 20,
  },
  itemsContainer: {
    ...globalStyles.smallShadow,
    backgroundColor: 'white',
  },
  itemTouchable: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  itemTextContainer: {
    position: 'relative',
  },
  itemText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 20,
    color: COLORS.midGray,
  },
  iconContainer: {
    width: 50,
  },
  badgeContainer: {
    height: 20,
    width: 20,
    backgroundColor: COLORS.mainGreen,
    position: 'absolute',
    right: -15,
    bottom: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...globalStyles.smallShadow,
  },
  badgeText: {color: 'white', fontFamily: 'Quicksand-Light'},
});
