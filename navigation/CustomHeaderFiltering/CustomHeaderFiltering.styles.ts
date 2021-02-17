import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerWrapper: {
    height: 45,
    backgroundColor: 'white',
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
  },
  backTouchableStyle: {
    position: 'absolute',
    left: 20,
  },
  rightTouchable: {
    position: 'absolute',
    right: 20,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Quicksand-Medium',
    position: 'absolute',
    left: 60,
  },
});
