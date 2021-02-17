import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../assets/colors';
import {globalStyles} from '../../../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    ...globalStyles.smallShadow,
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 4,
    margin: 10,
  },
  mainBack: {
    height: '20%',
    backgroundColor: '#F7F9FB',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoStyle: {
    height: 40,
    width: 240,
    resizeMode: 'cover',
  },
  cardStyle: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    width: '90%',
    transform: [{translateY: -20}],
    ...globalStyles.smallShadow,
  },
  noQaText: {
    color: COLORS.mainGreen,
    textAlign: 'center',
    fontFamily: 'Quicksand-Light',
  },
  noQaCardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
