import {PixelRatio, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  singleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  textStyle: {
    fontSize: 18 / PixelRatio.getFontScale(),
  },
});
