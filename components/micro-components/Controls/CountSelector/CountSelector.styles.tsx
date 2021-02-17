import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderColor: '#9f9f9f',
    borderWidth: 1,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  decrementButton: {
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: '#9f9f9f',
    borderRightWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countContainer: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  countText: {
    fontFamily: 'Quicksand-Regular',
    color: '#484848',
    fontSize: 15,
  },
  incrementButton: {
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderColor: '#9f9f9f',
    borderLeftWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
