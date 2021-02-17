import {
  StackHeaderProps,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import DescriptionTypo from '../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import ProductNameTypo from '../../components/micro-components/Typography/ProductNameTypo/ProductNameTypo';
import {styles} from './CustomHeaderFiltering.styles';

const CustomHeaderFiltering: React.FC<StackHeaderProps> = (props) => {
  const {title, clearButtonFunction} = props.scene.descriptor
    .options as Partial<
    StackNavigationOptions & {clearButtonFunction: () => any}
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
        <TouchableOpacity
          onPress={() => {
            clearButtonFunction && clearButtonFunction();
          }}
          style={styles.rightTouchable}>
          <DescriptionTypo text="Temizle" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeaderFiltering;
