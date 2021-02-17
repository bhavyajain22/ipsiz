import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {styles} from './EditAddressContent.styles';

const EditAddressContent = () => {
  return (
    <View style={styles.container}>
      <Text>EditAddressContent</Text>
    </View>
  );
};

export default memo(EditAddressContent);
