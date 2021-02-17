import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: 'white',
  },
  scrollContentStyle: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  touchableStyle: {
    marginHorizontal: 8,
    alignItems: 'center',
  },
  iconContainerStyle: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textContainer: {
    width: 80,
    height: 30,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontFamily: 'Quicksand-Regular',
    color: '#000000',
    fontSize: 10,
    marginTop: 5,
    textAlign: 'center',
  },
});
