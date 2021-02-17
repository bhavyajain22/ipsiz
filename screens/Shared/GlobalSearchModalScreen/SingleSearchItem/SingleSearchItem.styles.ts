import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 7,
    paddingVertical: 9,
    backgroundColor: 'white',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#d7d7d7',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 12,
    paddingHorizontal: 5,
    color: COLORS.midGray,
  },
  iconContainer: {
    paddingLeft: 5,
  },
});
