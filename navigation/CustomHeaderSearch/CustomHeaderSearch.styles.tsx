import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerWrapper: {
    height: 90,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,

    elevation: 5,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '50%',
    position: 'relative',
  },
  logoImg: {
    height: 25,
    width: 150,
    resizeMode: 'cover',
  },
  topIconsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right:5
  },
  secondRow: {
    height: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchTouchableContainer: {
    height: '90%',
    flexBasis: '100%',
  },
  searchContainer: {
    height: '98%',
    backgroundColor: '#EFEFEF',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  searchText: {
    marginLeft: 10,
    fontFamily: 'Quicksand-Light',
    color: '#000000',
  },
  searchRightBlock: {
    position:"absolute",
    right:0,
    backgroundColor: '#35B257',
    borderRadius: 25,
    height:"100%",
    width:60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchRightText: {
    fontFamily: 'Quicksand-Light',
    color: '#ffffff',

  },
});
