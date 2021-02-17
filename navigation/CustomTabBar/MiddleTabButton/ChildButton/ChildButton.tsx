import React, {useRef, useEffect} from 'react';
import {Text, Animated, StyleProp, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from './ChildButton.styles';
import {
  getXPosition,
  getYPosition,
  getText,
  getColor,
  getScreen,
  getAppState,
} from './child-button-utility';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {useDispatch} from 'react-redux';
import {convertAppType} from '../../../../store/actions/app.actions';

const ChildButton: React.FC<{
  openState: boolean;
  pos: 'middle' | 'left' | 'right';
  onClose: () => void;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}> = ({openState, pos, navigation, onClose}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  const comeToScene = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: 1.15,
      useNativeDriver: true,
    }).start();
  };

  const removeFromScene = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.spring(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (openState) {
      comeToScene();
    } else {
      removeFromScene();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openState]);

  return (
    <Animated.View
      style={[
        styles.AnimatedViewStyle as StyleProp<ViewStyle>,
        {
          transform: [
            {
              scale: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0.5, 1],
              }),
            },
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, getYPosition(pos)],
              }),
            },
            {
              translateX: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, getXPosition(pos)],
              }),
            },
          ],
        },
      ]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          onClose();
          dispatch(convertAppType(getAppState(pos)));
          navigation.navigate(getScreen(pos));
        }}
        style={[
          styles.TouchButtonStyle as StyleProp<ViewStyle>,
          {backgroundColor: getColor(pos)},
        ]}>
        <Text style={styles.TextStyle}>{getText(pos)}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ChildButton;
