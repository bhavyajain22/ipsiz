import {StyleSheet,Dimensions} from 'react-native';
import {COLORS} from '../../../assets/colors';

const {width,height} = Dimensions.get('screen')
export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.mainBackground,
  },
  scrollContentContainerStyle: {
    backgroundColor: '#F7F9FB',
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  secondCarouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
  cardHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  flatListContainer: {
    paddingLeft: 15,
    paddingBottom: 15,
  },
  threeCards:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  threeSmallCard:{
    flex:1,
    height:width/3.1, 
    width:width/3.1,
  },
  chipsMain:{
    display:'flex',
    flexDirection:'row',
    marginVertical:10
  },
  activateChip:{
  backgroundColor:'#35b257',
  color:'white',
  borderRadius:4,
  marginHorizontal:6,
  overflow:'hidden',
  paddingHorizontal:5
  },
  disableChip:{
    backgroundColor:'#f2f2f2',
    color:'gray',
    borderRadius:4,
    marginHorizontal:6,
    overflow:'hidden',
    paddingHorizontal:5


  },

  cokCards:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
    backgroundColor:'white'
  },
  cokProduct:{
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  scrollCard: {

    flex:1,

  },
  singleCard:{
    backgroundColor: 'white',
    flex:1,
    height:width/1.6,
    width:width/1.05,
    marginHorizontal:8,
    marginTop:8

  },
  twoCards:{
    backgroundColor:'white',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  productCard:{
    backgroundColor:'green',
    flex:1,
    height:width,
    width:width/2.4,
    marginHorizontal:10,
    resizeMode: 'contain',
  },

  kampanyalarCards:{
    backgroundColor:'white',
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly'

},
});
