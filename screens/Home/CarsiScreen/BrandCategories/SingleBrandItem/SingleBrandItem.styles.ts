import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    height: 300,
    width: 350,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    height: 220,
    width: '100%',
    resizeMode: 'cover',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  bottomContainer: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Quicksand-Regular',
    color: '#626262',
    fontSize: 20,
  },
  descriptionText: {
    fontFamily: 'Quicksand-Light',
    color: '#626262',
    fontSize: 16,
  },
  touchable: {
    borderColor: '#ababab',
    borderWidth: 1,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  seeMoreText: {
    fontFamily: 'Quicksand-Light',
    color: '#707070',
    fontSize: 18,
  },
});
