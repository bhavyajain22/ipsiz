import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerWrapper: {
    height: 90,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    position: 'relative',
  },
  logoImg: {
    height: 20,
    width: 120,
    resizeMode: 'cover',
  },
  backTouchableStyle: {
    position: 'absolute',
    left: 20,
  },
  secondRow: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchTouchableContainer: {
    height: '90%',
    flex: 1,
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
});
