import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const HorizontalCategorySkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row">
        <SkeletonPlaceholder.Item marginLeft={10}>
          <SkeletonPlaceholder.Item height={45} width={45} borderRadius={25} />
          <SkeletonPlaceholder.Item height={16} width={50} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item marginLeft={10}>
          <SkeletonPlaceholder.Item height={45} width={45} borderRadius={25} />
          <SkeletonPlaceholder.Item height={16} width={50} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item marginLeft={10}>
          <SkeletonPlaceholder.Item height={45} width={45} borderRadius={25} />
          <SkeletonPlaceholder.Item height={16} width={50} />
        </SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item marginLeft={10}>
          <SkeletonPlaceholder.Item height={45} width={45} borderRadius={25} />
          <SkeletonPlaceholder.Item height={16} width={50} />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default HorizontalCategorySkeleton;
