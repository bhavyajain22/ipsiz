import React, {memo, useEffect, useState} from 'react';
import {Image, Dimensions,View,Text,ProgressViewIOS} from 'react-native';
import {styles} from './KacCards.style';
import CustomCarousel from '../../../../components/CustomCarousel/CustomCarousel';
import {IBanner} from '../../../../types/response-types/carsi.types';
import {getCarsiBanners} from '../../../../services/carsi.service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {changeCategoryAction} from '../../../../store/actions/filtering.actions';
import {useNavigation} from '@react-navigation/native';
import StarRating from "../../../../components/micro-components/StarRating/StarRating";
import ProductNameTypo from "../../../../components/micro-components/Typography/ProductNameTypo/ProductNameTypo";

const {width,height}= Dimensions.get('screen')
const BannersCarousel: React.FC = () => {
  return (
   <View style={{borderWidth:1,flexDirection:'column', borderRadius:13 ,overflow:'hidden', borderColor:'#E6E6E6', flex:1,width:width/2,height:width*1,margin:width*0.022}}>
      <View style={{flex:0.5, backgroundColor:'white',justifyContent:'space-between',paddingLeft:5,paddingBottom:5,paddingTop:5,flexDirection:'row'}}>
      <Image resizeMode='contain' style={{ flex:0.1,width:12,height:11,marginTop:10, marginLeft:10}} source={require('../../../../assets/images/heart_red.png')} />
      <Image resizeMode='cover' style={{flex:0.8, width:164, height:199, marginRight:50}} source={require('../../../../assets/images/mixer.png')} />
      <Image resizeMode='cover' style={{flex:0.1,width:27,height:23, position:'absolute', marginLeft:150}} source={require('../../../../assets/images/extend.png')} />
        

       
      </View>
      <View style={{flex:0.20, alignSelf:'flex-start',backgroundColor:'white'}}>
      <View> 
        <ProductNameTypo type="list" text={'Woollen Concept Meyve Doğrama '} textStyle={{fontSize:14, marginHorizontal:5}}/>
        <ProductNameTypo type="list" text={'Alt Ürün Açıklaması '} textStyle={{fontSize:12, marginHorizontal:5}}/>
          <StarRating
              rating={5}
              reviewCount={300}
              containerStyle={{marginVertical:5, width:69, height:12, marginHorizontal:5}}
          
              
              
            />
           
        </View>   
       
      </View>
      <View style={{flex:0.3, backgroundColor:'white'}}>

      <Image resizeMode='contain' style={{marginTop:30, width:63, height:27, position:'absolute',marginLeft:20 }} source={require('../../../../assets/images/tukendi.png')} />
      <Image resizeMode='contain' style={{marginLeft:115,marginTop:20, width:55, height:41,position:'absolute'}} source={require('../../../../assets/images/green-bg-bar.png')} />
      <Image resizeMode='contain' style={{marginLeft:115,marginTop:63, width:55, height:41,position:'absolute'}} source={require('../../../../assets/images/red-bg-bar.png')} />
      <Text style={{ textDecorationLine: 'line-through',fontFamily: 'Quicksand-Light',
    color: 'grey',
    fontSize: 10,
    position:'absolute',marginTop:67, marginLeft:20}}>163.10 TL</Text>
      <Text style={styles.price}>128.50 TL</Text>
      

      </View>
   </View>
    
  );
};

export default memo(BannersCarousel);
