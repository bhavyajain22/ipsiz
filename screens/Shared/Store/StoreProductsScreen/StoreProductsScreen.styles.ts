import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  productImage: {
    width: Dimensions.get('window').width / 2 - 40,
    marginLeft: 20,
  },
});
