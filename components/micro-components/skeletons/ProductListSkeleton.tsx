import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import SingleProductSkeleton from './SingleProductRegularSkeleton';

const ProductListSkeleton = () => {
  return (
    <SkeletonPlaceholder.Item flexDirection="row">
      <SingleProductSkeleton />
      <SingleProductSkeleton />
      <SingleProductSkeleton />
      <SingleProductSkeleton />
    </SkeletonPlaceholder.Item>
  );
};

export default ProductListSkeleton;
