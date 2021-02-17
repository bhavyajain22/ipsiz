import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputStyle: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },
  inputIcon: {
    width: 35,
    marginLeft: 10,
  },
  popularSearchesContainer: {
    padding: 10,
  },
  searchItems: {
    flexDirection: 'row',
  },
  sideCard: {
    shadowOpacity: 0,
    elevation: 0,
    borderColor: '#efefef',
    borderWidth: 1,
    padding: 5,
  },
});
