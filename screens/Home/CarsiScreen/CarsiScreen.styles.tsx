import {StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  scrollContentContainerStyle: {
    backgroundColor: '#F7F9FB',
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  secondCarouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  marginTopTwenty: {
    marginTop: 20,
  },
  marginLeftTen: {
    marginLeft: 10,
  },
  marginLeftFive: {
    marginLeft: 5,
  },
  cardHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  flatListContainer: {
    paddingLeft: 15,
    paddingBottom: 15,
  },
});
