import React from 'react';
import {View, Image, Text, ViewStyle} from 'react-native';
import {styles} from './SingleStore.styles';
import {globalStyles} from '../../../assets/globalStyles.styles';
import StarRating from '../../micro-components/StarRating/StarRating';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {IStore} from '../../../types/IStore.type';
import DescriptionTypo from '../../micro-components/Typography/DescriptionTypo/DescriptionTypo';

const SingleStore: React.FC<{
  store: IStore;
  containerStyle?: ViewStyle;
}> = ({store, containerStyle}) => {
  return (
    <TouchableOpacity style={{...styles.mainContainer, ...containerStyle}}>
      {/* IMAGE CONTAINER */}
      <Image
        style={styles.imageStyle}
        source={{
          uri: store.listImageUrl,
        }}
      />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{store.title}</Text>
        <View style={styles.bottomContainer}>
          <StarRating
            rating={store.rating}
            reviewCount={0}
            containerStyle={globalStyles.marginTopTen}
          />

          <DescriptionTypo
            textStyle={styles.categoryText}
            text={store.categoryName}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SingleStore;
