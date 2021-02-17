import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageContainer: {
    padding: 10,
    alignItems: 'center',
  },
  percentageBackground: {
    marginTop: 10,
    position: 'relative',
    width: '100%',
    borderRadius: 6,
    paddingVertical: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.18,
    shadowRadius: 2,
    elevation: 4,
  },
  percentageFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 6,
    paddingVertical: 5,
    backgroundColor: COLORS.mainBlue,
  },
});
