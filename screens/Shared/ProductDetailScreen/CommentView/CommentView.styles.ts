import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
    ...globalStyles.marginTopTen,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  commentText: {
    fontSize: 14,
  },
  authorContainer: {
    ...globalStyles.flexRow,
    ...globalStyles.alignItemsCenter,
    ...globalStyles.marginTopTen,
  },
  logoImg: {
    height: 40,
    width: 240,
    resizeMode: 'cover',
  },
  emptyResultContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyTextStyle: {
    color: COLORS.mainGreen,
    fontFamily: 'Quicksand-Light',
    fontSize: 16,
    ...globalStyles.marginTopTwenty,
    ...globalStyles.marginBottomTen,
  },
  newCommentButtonContainer: {width: '100%', marginTop: 10},
});
