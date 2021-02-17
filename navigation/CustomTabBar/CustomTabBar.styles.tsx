import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  WrapperViewStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.85,

    elevation: 15,
  },
  TouchableStyle: {
    flex: 1,
    paddingHorizontal: 5,
    flexDirection: 'column',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextStyle: {
    paddingTop: 5,
    fontFamily: 'Quicksand-Regular',
    textAlign: 'center',
    fontSize: 12,
  },
});
