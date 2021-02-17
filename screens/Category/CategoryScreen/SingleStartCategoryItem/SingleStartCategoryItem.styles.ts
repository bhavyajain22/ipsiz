import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  itemWrapper: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontFamily: 'Quicksand-Light',
    fontSize: 15,
    paddingLeft: 10,
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: 'cover',
    borderRadius: 100,
  },
});
