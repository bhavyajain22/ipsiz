import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '60%',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  clearText: {padding: 10, fontFamily: 'Quicksand-Regular'},
  optionContainer: {paddingVertical: 5, paddingHorizontal: 5},
  touchableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderColor: '#ababab',
    borderWidth: 0.5,
    borderRadius: 4,
  },
  textStyle: {
    fontFamily: 'Quicksand-Light',

    fontSize: 17,
  },
});
