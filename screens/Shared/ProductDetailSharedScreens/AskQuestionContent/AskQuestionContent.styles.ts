import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  mainBack: {
    height: '40%',
    backgroundColor: '#F7F9FB',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoStyle: {
    height: 40,
    width: 240,
    resizeMode: 'cover',
  },
  closeIconStyle: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  cardStyle: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    width: '90%',
    transform: [{translateY: -50}],
    ...globalStyles.smallShadow,
  },
  textInputStyle: {
    minHeight: 100,
    marginTop: 10,
  },
});
