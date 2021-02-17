import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  marginTopFive: {
    marginTop: 5,
  },
  marginTopTen: {
    marginTop: 10,
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
  marginRightTen: {
    marginRight: 10,
  },
  marginBottomTen: {
    marginBottom: 10,
  },
  paddingTen: {
    padding: 10,
  },
  paddingHorizontalTen: {
    paddingHorizontal: 10,
  },
  paddingTwenty: {
    padding: 20,
  },
  smallShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  middleShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  largeShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  relativePos: {
    position: 'relative',
  },
  alignItemsEnd: {
    alignItems: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsStart: {
    alignItems: 'flex-start',
  },
  justifyContentCenter: {
    justifyContent: 'center',
  },
  justifyContentSpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  zIndexZero: {
    zIndex: 0,
  },
  zIndexMinus: {
    zIndex: -100,
  },
});
