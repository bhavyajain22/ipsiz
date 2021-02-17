import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  mainContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerWrapper: {
    height: 50,
    backgroundColor: 'white',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 0.7,
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
  titleText: {
    fontSize: 18,
    fontFamily: 'Quicksand-Medium',
  },
  contentContainer: {
    height: '100%',
  },
});
