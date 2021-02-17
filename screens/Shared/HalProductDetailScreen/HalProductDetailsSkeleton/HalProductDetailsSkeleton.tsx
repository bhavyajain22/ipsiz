import React, {memo} from 'react';
import {View, Dimensions} from 'react-native';
import {styles} from './HalProductDetailsSkeleton.styles';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {globalStyles} from '../../../../assets/globalStyles.styles';

const HalProductDetailsSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <View style={styles.carouselContainer}>
        <SkeletonPlaceholder.Item
          height={350}
          width={Dimensions.get('window').width}
        />
        <SkeletonPlaceholder.Item
          width={Dimensions.get('window').width / 2}
          borderRadius={10}
          height={20}
          marginVertical={10}
          marginHorizontal={10}
        />
        <View style={styles.infoContainer}>
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width / 4}
            borderRadius={10}
            height={15}
            marginHorizontal={10}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width / 4}
            borderRadius={10}
            height={15}
            marginHorizontal={10}
          />
        </View>

        <View style={globalStyles.marginTopTwenty}>
          <SkeletonPlaceholder.Item
            width={100}
            borderRadius={10}
            height={15}
            marginHorizontal={10}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.middleBottomContainer}>
          <SkeletonPlaceholder.Item width={100} borderRadius={10} height={20} />
          <SkeletonPlaceholder.Item width={80} borderRadius={10} height={35} />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.middleSkeletonContainer}>
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width / 4}
            borderRadius={10}
            height={40}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width / 4}
            borderRadius={10}
            height={40}
          />
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width / 4}
            borderRadius={10}
            height={40}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.middleSkeletonContainer}>
          <SkeletonPlaceholder.Item
            width={Dimensions.get('window').width - 20}
            borderRadius={10}
            height={400}
          />
        </View>
      </View>
    </SkeletonPlaceholder>
  );
};

export default memo(HalProductDetailsSkeleton);
