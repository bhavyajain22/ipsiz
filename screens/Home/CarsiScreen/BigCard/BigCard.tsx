import React, {memo, useEffect, useState} from 'react';
import {Image, Dimensions,View,Text,ProgressViewIOS} from 'react-native';
import {styles} from './BigCard.styles';
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
   <View style={{borderWidth:1,borderRadius:5 ,overflow:'hidden', borderColor:'#c7c7c7', flex:1,width:width*0.95,height:height*0.7,margin:width*0.022}}>
    <View style={{flex:0.6,backgroundColor:'white',flexDirection:'row'}}>
      <View style={{flex:0.25,justifyContent:'space-between',paddingLeft:5,paddingBottom:5,paddingTop:5}}>
        <View> 
        <ProductNameTypo type="list"  text={'Özel Teklif '} textStyle={{fontSize:20}} />
          <StarRating
              rating={3}
              reviewCount={300}
              containerStyle={{marginVertical:5}}
            />
        </View>   
        <Image resizeMode='cover' style={{width:23,height:21,}} source={require('../../../../assets/images/heart_red.png')} />

       
      </View>
      <View style={{flex:0.5,alignSelf:'flex-end'}}>
        <Image resizeMode='cover' style={{alignSelf:'center', width:288, height:348}} source={require('../../../../assets/images/mixer.png')} />
      </View>
      <View style={{flex:0.25,alignItems:'center'}}>
      <Image resizeMode='contain' style={{marginTop:7, width:76, height:77}} source={require('../../../../assets/images/pink-bg-bar.png')} />

      </View>
    </View>
    <View style={{flex:0.4}}>
    <Text style={styles.seeMoreText}> Woollen Concept Meyve Doğrama 200 Watt</Text>
    <View style={{flex:0.3,alignItems:'center',paddingHorizontal:10, flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={styles.price}>128.50 TL</Text>
    <Image resizeMode='contain' style={{marginTop:5, width:80, height:50}} source={require('../../../../assets/images/green-bg-bar.png')} />
    </View>
    <View style={{flex:0.4,flexDirection:'row',marginVertical:7, justifyContent:'space-evenly'}}>
      <View style={{flex:0.24,borderWidth:1, borderColor:'#c7c7c7', alignItems:'center',justifyContent:'center', marginVertical:4,borderRadius:6}}>
      <ProductNameTypo type="list" text={'268 '} />
      <ProductNameTypo type="list" text={'Gun '} />
      </View>

      <View style={{flex:0.24,borderWidth:1,borderColor:'#c7c7c7',alignItems:'center',justifyContent:'center', marginVertical:4,borderRadius:6}}>
      <ProductNameTypo type="list" text={'268 '} />
      <ProductNameTypo type="list" text={'Gun '} />
      </View>

      <View style={{flex:0.24,borderWidth:1,borderColor:'#c7c7c7', alignItems:'center',justifyContent:'center', marginVertical:4,borderRadius:6}}>
      <ProductNameTypo type="list" text={'268 '} />
      <ProductNameTypo type="list" text={'Gun '} />
      </View>

      <View style={{flex:0.24,borderWidth:1,borderColor:'#c7c7c7',alignItems:'center',justifyContent:'center', marginVertical:4,borderRadius:6}}>
      <ProductNameTypo type="list" text={'268 '} />
      <ProductNameTypo type="list" text={'Gun '} />
      </View>
     
    </View>
    <View style={{flex:0.25,justifyContent:'center'}}></View>
      <View style={{flex:0.2,marginVertical:0, marginHorizontal:5,flexDirection:'row',justifyContent:'space-between'}}>
      <ProductNameTypo type="list" text={'Satilan Adet: 6 '} />
      <ProductNameTypo type="list" text={'Stock Durumu: 39 '} />

      </View>

      <View style={{flex:0.1,marginVertical:4}}>
      <ProgressViewIOS
          progressTintColor="#35b257"
          trackTintColor="gray"
          progress={0.3}
          style={{marginHorizontal:5,transform: [{ scaleX: 1.0 }, { scaleY: 3 }]}}
        />
</View>
     
    </View>
   </View>
    
  );
};

export default memo(BannersCarousel);
