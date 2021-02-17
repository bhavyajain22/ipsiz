import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  mainCard: {
    backgroundColor: 'white',
    ...globalStyles.smallShadow,
    paddingTop: 30,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  profilePicture: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: COLORS.mainBackground,
    borderWidth: 1,
    borderColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textsContainer: {
    paddingLeft: 20,
  },
  fullNameText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 20,
    color: COLORS.midGray,
  },
  iconedTextContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  iconedText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 13,
    color: COLORS.midGray,
    paddingLeft: 5,
  },
  verifiedText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 13,
    color: COLORS.mainGreen,
    paddingLeft: 5,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
  },
  editButton: {flex: 1},
  changePasswordButton: {
    flex: 1,
    marginLeft: 5,
  },
});
