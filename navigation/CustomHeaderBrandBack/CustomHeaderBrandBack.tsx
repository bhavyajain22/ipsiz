import React from 'react';
import {StackHeaderProps} from '@react-navigation/stack';
import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from './CustomHeaderBrandBack.styles';
import { FontAwesome5 } from '@expo/vector-icons';

const CustomHeaderBrandBack: React.FC<
  StackHeaderProps & {noShowBack?: boolean}
> = (props) => {
  return (
    <View style={styles.headerWrapper}>
      <View style={styles.firstRow}>
        {!props.noShowBack && (
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
        )}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            props.navigation.canGoBack()
              ? props.navigation.goBack()
              : props.navigation.navigate('tab_stack')
          }>
          <Image
            source={{
              uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
            }}
            style={styles.logoImg}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeaderBrandBack;
