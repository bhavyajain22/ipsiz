import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const SingleProductSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item>
        <SkeletonPlaceholder.Item
          margin={10}
          height={200}
          width={200}
          borderTopRightRadius={5}
          borderTopLeftRadius={5}
        />
        <SkeletonPlaceholder.Item
          flexDirection="column"
          width={200}
          marginBottom={10}
          marginLeft={10}>
          <SkeletonPlaceholder.Item height={10} width={170} />
          <SkeletonPlaceholder.Item height={10} width={100} marginTop={5} />
          <SkeletonPlaceholder.Item height={15} width={75} marginTop={5} />
          <SkeletonPlaceholder.Item
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            <SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item height={20} width={60} marginTop={5} />
              <SkeletonPlaceholder.Item height={20} width={60} marginTop={5} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item>
              <SkeletonPlaceholder.Item height={20} width={60} marginTop={5} />
              <SkeletonPlaceholder.Item height={30} width={60} marginTop={5} />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default SingleProductSkeleton;
