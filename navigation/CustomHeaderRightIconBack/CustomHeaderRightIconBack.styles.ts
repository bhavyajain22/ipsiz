import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  // mainContainer: {
  //   width: Dimensions.get('window').width,
  //   backgroundColor: 'white',
  // },
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
  backTouchableStyle: {
    position: 'absolute',
    left: 20,
  },
  iconTouchable: {
    position: 'absolute',
    right: 20,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Quicksand-Medium',
  },
});
