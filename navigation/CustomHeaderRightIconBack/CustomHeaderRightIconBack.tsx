import {
  StackHeaderProps,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import FontAwesome5 from '@expo/vector-icons';
import ProductNameTypo from '../../components/micro-components/Typography/ProductNameTypo/ProductNameTypo';
import {styles} from './CustomHeaderRightIconBack.styles';

interface CustomHeaderRightIconBackProps extends StackHeaderProps {
  rightIconName: string;
}

const CustomHeaderRightIconBack: React.FC<CustomHeaderRightIconBackProps> = (
  props,
) => {
  const {title, iconButtonFunction} = props.scene.descriptor.options as Partial<
    StackNavigationOptions & {iconButtonFunction: () => any}
  >;
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
          <FontAwesome5
            name="chevron-left"
            solid
            size={25}
            color="#484848"
          />
        </TouchableOpacity>
        <ProductNameTypo
          text={title as string}
          textStyle={styles.titleText}
          truncateLimit={20}
        />
        <TouchableOpacity
          hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
          onPress={iconButtonFunction}
          style={styles.iconTouchable}>
          <FontAwesome5
            name={props.rightIconName}
            light
            size={25}
            color="#484848"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeaderRightIconBack;
