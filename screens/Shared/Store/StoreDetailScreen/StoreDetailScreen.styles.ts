import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  cardContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderTopColor: '#D3D3D3',
    borderTopWidth: 0.7,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
  },
  storeImage: {width: 120, height: 120, borderRadius: 60},
  topRightContainer: {marginLeft: 20, flex: 1},
  storeNameContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  storeText: {fontFamily: 'Quicksand-Regular', marginLeft: 5},
  storeScoreText: {
    fontFamily: 'Quicksand-Light',
    fontSize: 12,
    color: COLORS.midGray,
    marginTop: 5,
  },
  buttonsContainer: {flexDirection: 'row', alignItems: 'center', marginTop: 10},
  singleButtonContainer: {
    flex: 1,
  },
  percentageContainer: {
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
  percentageBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 6,
    paddingVertical: 5,
    backgroundColor: COLORS.mainGreen,
  },
  secondCardContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    marginTop: 20,
    borderTopColor: '#D3D3D3',
    borderTopWidth: 0.7,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
  },
  secondCardHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  secondHeaderText: {
    fontFamily: 'Quicksand-Regular',
    color: COLORS.mainGreen,
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  featureText: {
    minWidth: 120,
    color: COLORS.mainDark,
    fontSize: 15,
    fontFamily: 'Quicksand-Regular',
  },
  featureRightText: {
    color: COLORS.midGray,
    fontSize: 15,
    fontFamily: 'Quicksand-Light',
  },
});
