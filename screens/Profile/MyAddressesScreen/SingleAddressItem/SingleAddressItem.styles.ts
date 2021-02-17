import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: 'white',
    ...globalStyles.smallShadow,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    color: COLORS.mainGreen,
    marginLeft: 10,
  },
  nameText: {
    fontFamily: 'Quicksand-Regular',
  },
  phoneText: {fontFamily: 'Quicksand-Light', marginTop: 5},
  addressText: {fontFamily: 'Quicksand-Light', marginTop: 5, width: '85%'},
});
