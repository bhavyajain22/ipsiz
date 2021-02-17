import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  checkboxStyle: {
    marginLeft: 8,
    marginTop: 20,
  },
  optionsContainer: {
    ...globalStyles.flexRow,
    ...globalStyles.marginTopTen,
    flexWrap: 'wrap',
  },
  optionText: {
    fontSize: 15,
  },
});
