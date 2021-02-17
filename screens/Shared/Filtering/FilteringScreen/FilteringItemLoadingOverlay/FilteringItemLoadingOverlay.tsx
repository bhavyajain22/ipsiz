import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './FilteringItemLoadingOverlay.styles';

const FilteringItemLoadingOverlay = () => {
  return (
    <>
      <View style={styles.overlayContainer} />
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="small" />
      </View>
    </>
  );
};

export default FilteringItemLoadingOverlay;
