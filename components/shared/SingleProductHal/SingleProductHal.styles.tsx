import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  mainContainer: {
    borderWidth: 1,
    borderColor: '#eaeaea',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: 'white',

    marginLeft: 4,
    width: Dimensions.get('window').width / 2 - 7,
    marginTop: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width / 2 - 15,
  },
  imageStyle: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 15,
    resizeMode: 'contain',
  },
  subContainer: {
    padding: 10,
    width: '100%',
    height: 150,
    justifyContent: 'space-between',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingStockContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    width: '100%',
  },
  stockTitleText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 10,
    color: '#767676',
  },
  stockValueText: {
    color: COLORS.mainGreen,
    fontFamily: 'Quicksand-Medium',
    fontSize: 18,
  },
  productNameContainer: {
    height: 35,
  },
  contactButtonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  contactButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#5C6C81',
    borderRadius: 4,
    borderWidth: 1,
    paddingVertical: 3,
  },
  contactText: {
    fontFamily: 'Quicksand-Regular',
    fontSize: 14,
    paddingLeft: 10,
    color: '#5C6C81',
  },
});
