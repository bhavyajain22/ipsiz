import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../assets/colors';
import {globalStyles} from '../../../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'white'},
  scrollContainer: {
    backgroundColor: 'white',
  },
  topContainer: {
    backgroundColor: COLORS.mainBackground,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  contentCard: {
    backgroundColor: 'white',
    ...globalStyles.smallShadow,
    borderRadius: 5,
    marginTop: -50,
    marginHorizontal: 20,
    padding: 10,
  },
  logo: {
    height: 40,
    width: 240,
    resizeMode: 'cover',
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
