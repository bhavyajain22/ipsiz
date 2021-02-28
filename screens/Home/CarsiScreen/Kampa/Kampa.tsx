import React, {memo, useEffect, useState} from 'react';
import {Image, Dimensions,View,Text,ProgressViewIOS} from 'react-native';
import {styles} from './Kampa.styles';
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
   <View style={{backgroundColor:'white',borderWidth:1,flexDirection:'row', borderRadius:10 ,overflow:'hidden', borderColor:'#E6E6E6', flex:1,width:width*0.95,height:height*0.19,margin:width*0.022}}>
      <View style={{flex:0.25, justifyContent:'space-between',paddingLeft:5,paddingBottom:5,paddingTop:5}}>
      <Image resizeMode='cover' style={{width:12,height:11,}} source={require('../../../../assets/images/heart_red.png')} />
      <Image resizeMode='cover' style={{alignSelf:'center', width:115, height:139}} source={require('../../../../assets/images/mixer.png')} />
        

       
      </View>
      <View style={{flex:0.5, alignSelf:'flex-start'}}>
      <View> 
        <ProductNameTypo type="list" text={'Woollen Concept Meyve Doğrama '} textStyle={{fontSize:14}}/>
          <StarRating
              rating={3}
              reviewCount={300}
              containerStyle={{marginVertical:5}}
            />
            <Text style={{fontSize:10, color:'#E6E6E6',textDecorationLine: 'line-through',marginTop:50}}>163.10 TL</Text>
            <Text style={styles.price}>128.50 TL</Text>
        </View>   
       
      </View>
      <View style={{flex:0.25, alignItems:'center', alignSelf:'center'}}>
      <Image resizeMode='contain' style={{marginTop:5, width:55, height:40}} source={require('../../../../assets/images/urun-tukenmek-uzere.png')} />
      <Image resizeMode='contain' style={{marginTop:5, width:55, height:40}} source={require('../../../../assets/images/green-bg-bar.png')} />
      <Image resizeMode='contain' style={{marginTop:5, width:55, height:40}} source={require('../../../../assets/images/red-bg-bar.png')}></Image>
      
      

      </View>
   </View>
    
  );
};

export default memo(BannersCarousel);
