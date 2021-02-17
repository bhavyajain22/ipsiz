import {StyleSheet} from 'react-native';
import {globalStyles} from '../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F7F9FB',
  },
  firstContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
  },
  carouselSingleItem: {
    height: 350,
    width: '100%',
    resizeMode: 'contain',
    borderRadius: 5,
  },
  itemHeaderContainer: {
    backgroundColor: 'white',
    padding: 10,
  },
  shareButton: {
    position: 'absolute',
    top: 75,
    right: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    ...globalStyles.smallShadow,
  },
  cargoStatusContainer: {
    borderWidth: 1,
    borderColor: '#69bc44',
    borderRadius: 4,
    padding: 2,
    width: 80,
  },
  shopTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  percentageStatusContainer: {
    borderWidth: 1,
    borderColor: '#cd5458',
    backgroundColor: '#cd5458',
    borderRadius: 4,
    padding: 2,
    marginTop: 5,
    width: 80,
  },
  percentageText: {
    textAlign: 'center',
    fontSize: 22,
    color: '#FFFFFF',
  },
  cargoText: {
    textAlign: 'center',
    fontSize: 10,
    color: '#69bc44',
  },
  carouselItem: {
    height: 350,
    backgroundColor: 'white',
  },
  addToFavoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    ...globalStyles.smallShadow,
  },
  addToAlarmButton: {
    position: 'absolute',
    top: 75,
    right: 10,
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    ...globalStyles.smallShadow,
  },
  productExplanationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
  },
  thirdContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
  },
  fourthContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    borderBottomColor: '#D3D3D3',
  },
  fifthContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
    backgroundColor: 'white',
    paddingVertical: 15,
    marginTop: 10,
  },
  sixthContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
    backgroundColor: 'white',
    marginTop: 10,
  },
  seventhContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
    backgroundColor: 'white',
    marginTop: 10,
  },
  eighthContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
    backgroundColor: 'white',
    marginTop: 10,
  },
  cardHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  flatListContainer: {
    paddingLeft: 5,
    paddingBottom: 5,
  },
  sideCardStyle: {
    marginTop: 10,
    marginBottom: 20,
    zIndex: 0,
  },
  ninethContainer: {
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 0.7,
    backgroundColor: 'white',
    marginTop: 10,
  },
  complaintButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  zoomViewHeaderContainer: {
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 10000,
  },
});
