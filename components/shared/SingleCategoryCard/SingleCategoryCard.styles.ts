import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width / 2.05 - 10,
    borderWidth: 1,
    borderColor: '#eaeaea',
    alignItems: 'center',
    borderRadius: 4,
  },
  touchableContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    height: 188,
    width: 180,
    resizeMode: 'contain',
  },
  categoryText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
    marginTop: 10,
  },
  subText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 12,
    marginTop: 10,
  },
});
