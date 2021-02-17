import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerWrapper: {
    height: 45,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 5,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    position: 'relative',
  },
  logoImg: {
    height: 20,
    width: 120,
    resizeMode: 'cover',
  },
  backTouchableStyle: {
    position: 'absolute',
    left: 20,
  },
});
