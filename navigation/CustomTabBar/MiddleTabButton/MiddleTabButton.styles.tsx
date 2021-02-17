import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  touchableWrapper: {
    height: 55,
    width: 55,
    borderRadius: 25,
    position: 'absolute',
    zIndex: 999,
    top: 2,
  },
  TouchableStyle: {
    height: 55,
    width: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  WrapperViewStyle: {
    position: 'relative',
    height: 50,
    width: 50,
  },
});
