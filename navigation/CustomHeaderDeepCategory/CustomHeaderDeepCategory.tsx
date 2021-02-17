import {
  StackHeaderProps,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import ProductNameTypo from '../../components/micro-components/Typography/ProductNameTypo/ProductNameTypo';
import {styles} from './CustomHeaderDeepCategory.styles';

const CustomHeaderDeepCategory: React.FC<StackHeaderProps> = (props) => {
  const {title} = props.scene.descriptor.options as Partial<
    StackNavigationOptions
  >;

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.firstRow}>
        <View />
        <TouchableOpacity
          hitSlop={{top: 10, left: 20, bottom: 0, right: 20}}
          onPress={() =>
            props.navigation.canGoBack()
              ? props.navigation.goBack()
              : props.navigation.navigate('tab_stack')
          }
          style={styles.backTouchableStyle}>
          <FontAwesome5 name="chevron-left" solid size={25} color="#484848" />
        </TouchableOpacity>
        <ProductNameTypo text={title as string} textStyle={styles.titleText} />
        <View />
      </View>
    </View>
  );
};

export default CustomHeaderDeepCategory;
