import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    shadowColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  bottomContainer: {
    width: (Dimensions.get('window').width * 9) / 10,
    marginTop: 15,
    alignItems: 'center',
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Quicksand-Regular',
    marginTop: 10,
  },
  loginButton: {width: '80%', marginTop: 30},
});
