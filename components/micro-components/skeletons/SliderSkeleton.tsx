import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SliderSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item height={180} width={393} />
    </SkeletonPlaceholder>
  );
};

export default SliderSkeleton;
