import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  headerText: {
    color: COLORS.mainGreen,
  },
  textInput: {
    height: 0,
    width: 0,
    position: 'absolute',
    top: -1000,
  },
  digitsContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  singleDigitContainer: {
    alignItems: 'center',
  },
});
