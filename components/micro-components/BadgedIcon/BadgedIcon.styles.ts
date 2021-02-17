import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainView: {
    position: 'relative',
  },
  badgeContainer: {
    position: 'absolute',
    top: 0,
    left: 12,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 10,
    color: 'white',
  },
});
