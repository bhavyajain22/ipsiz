import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  timerContainer: {
    position: 'absolute',
    top: 30,
    width: 200,
    left: Dimensions.get('window').width / 2 - 80,
  },
});
