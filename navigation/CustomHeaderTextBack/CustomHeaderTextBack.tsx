import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {View, TouchableOpacity} from 'react-native';
import {styles} from './CustomHeaderTextBack.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import ProductNameTypo from '../../components/micro-components/Typography/ProductNameTypo/ProductNameTypo';

const CustomHeaderTextBack: React.FC<StackHeaderProps> = (props) => {
  const {title} = props.scene.descriptor.options;
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.firstRow}>
        <TouchableOpacity
          hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
          onPress={() =>
            props.navigation.canGoBack()
              ? props.navigation.goBack()
              : props.navigation.navigate('tab_stack')
          }
          style={styles.backTouchableStyle}>
          <FontAwesome5 name="chevron-left" solid size={25} color="#484848" />
        </TouchableOpacity>
        <ProductNameTypo
          text={title as string}
          textStyle={styles.titleText}
          truncateLimit={20}
        />
      </View>
    </View>
  );
};

export default CustomHeaderTextBack;
