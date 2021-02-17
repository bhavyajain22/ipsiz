import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemText: {
    color: '#484848',
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
    padding: 10,
  },
  itemTextValued: {
    color: '#484848',
    fontSize: 18,
    fontFamily: 'Quicksand-Regular',
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  touchableContainer: {
    borderBottomColor: '#ebebeb',
    borderBottomWidth: 1,
    paddingVertical: 10,
    position: 'relative',
  },
  selectedText: {
    color: COLORS.mainGreen,
    fontFamily: 'Quicksand-Light',
    paddingLeft: 10,
  },
  accordeonItemContainer: {
    height: 65,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#ebebeb',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  accordeonItemText: {
    color: '#484848',
    fontSize: 20,
    fontFamily: 'Quicksand-Regular',
    padding: 10,
  },
  bottomButton: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 10,
  },
});
