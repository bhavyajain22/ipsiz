import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const BannerSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item height={130} width={352} />
    </SkeletonPlaceholder>
  );
};

export default BannerSkeleton;
