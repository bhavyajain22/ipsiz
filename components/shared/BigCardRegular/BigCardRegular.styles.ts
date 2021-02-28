import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '../../../assets/colors';
import {globalStyles} from '../../../assets/globalStyles.styles';

export const styles = StyleSheet.create({
  mainContainer: {
    borderWidth: 1,
    borderColor: '#eaeaea',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: 'white',

    marginLeft: 10,
    width: Dimensions.get('window').width / 1-20,
    marginTop: 5,
    flex: 1,
  },
  productVariantContainer: {
    position: 'absolute',
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...globalStyles.smallShadow,
    right: 10,
    top: 10,
  },
  productStokContainer: {
    position: 'absolute',

    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...globalStyles.smallShadow,
    right: 5,
    top: 15,
    
  },
  imageContainer: {
    width: Dimensions.get('window').width / 2 - 7,
  },
  imageStyle: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 15,
    resizeMode: 'contain',
  },
  subContainer: {
    padding: 5,
    width: '100%',
    marginTop: 'auto',
  },
  productNameContainer: {

  },
  bottomContainer: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  percentageStatusContainer: {
    borderRadius: 4,
    marginTop: 5,
    width: 50,
    marginRight:5
  },
  percentageTextBlock: {
    position:"absolute",
    top: 5, left: 5, right: 0, bottom: 0,
    alignContent:"center",
    alignSelf:"center"
  },

  percentageText: {
    textAlign: 'center',
    fontSize:15,
    color: COLORS.mainWhite,
  },
  percentage2Text: {
    textAlign: 'center',
    fontSize:8,
    color: COLORS.mainWhite,
  },
  
  cargoStatusContainer: {
    marginTop:5,
    width: 55,
  },
  imageGreenBGStyle: {
    width:50,
    height:41,
    backgroundColor:'red',
    alignSelf:'flex-start'
  },
  cargoText: {
    textAlign: 'center',
    fontSize: 9,
    color: '#ffffff',
    position:"absolute",
    top: 10, left: 0, right: 0, bottom: 0,
  },

  ratingStarStyle: {
    ...globalStyles.marginTopTen,
    marginBottom: 5,
  },
  outOfStockContainer: {
    // position: 'absolute',
    // left: 0,
    // bottom: '50%',
    // paddingVertical: 4,
    // paddingHorizontal: 10,
    // width: 100,
    // transform: [{rotateZ: '90deg'}, {translateY: 39}],
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    width: '100%',
    backgroundColor: '#D8BF7C',
    borderRadius: 4,
    borderColor: '#D8BF7C',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  outOfStockText: {
    color: 'white',
    fontSize: 10,
  },
  differentVariantsContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderColor: '#D8BF7C',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  differentVariantsText: {color: '#D8BF7C', fontSize: 11},
  fakeHeight: {
    height: 20,
  },
  productLine:{
    marginTop:7,
    borderWidth:2,
    borderColor:"#F2F2F2",
    width:"100%"
  }
});
