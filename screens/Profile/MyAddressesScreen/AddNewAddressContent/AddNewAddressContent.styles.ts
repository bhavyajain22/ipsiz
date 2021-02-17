import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    padding: 15,
  },
  textInput: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {flexDirection: 'row', marginTop: 10},
  iconContainer: {width: 40, justifyContent: 'center', alignItems: 'center'},
  modalInput: {flex: 1, backgroundColor: 'white'},
  addressDetailInput: {
    backgroundColor: 'white',
    flex: 1,
    minHeight: 100,
  },
  postalCode: {
    backgroundColor: 'white',
    flex: 1,
  },
});
