import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  mainContainer: {flex: 1},
  scrollContainer: {
    backgroundColor: 'white',
  },
  topContainer: {
    backgroundColor: COLORS.mainBackground,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginTop: 100,
    height: 50,
    width: 240,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
    fontWeight: '200',
    fontFamily: 'Quicksand-Light',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 150, width: 150, resizeMode: 'contain'},
});
