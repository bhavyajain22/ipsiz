import React from 'react';
import {View, Text, StyleProp, TextStyle, TouchableOpacity} from 'react-native';
import {
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import {styles} from './CustomTabBar.styles';
import MiddleTabButton from './MiddleTabButton/MiddleTabButton';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import {convertAppStateToColor} from '../../utility/app-state-to-color';

const CustomTabBar: React.FC<BottomTabBarProps & BottomTabBarOptions> = ({
  // renderIcon,
  // getLabelText,
  // activeTintColor,
  // inactiveTintColor,
  // renderIcon,
  // onTabPress,
  // onTabLongPress,
  // getAccessibilityLabel,
  descriptors,
  navigation,
  state,
}) => {
  const routesWithButton: any = [
    ...state.routes.slice(0, 2),
    {key: 'middle_button', name: 'middle_button', params: null},
    ...state.routes.slice(2, state.routes.length),
  ];
  const selectedAppState = useSelector(
    (reduxState: RootState) => reduxState.AppReducer.selectedAppState,
  );
  return (
    <View style={styles.WrapperViewStyle}>
      {routesWithButton.map((route: any, index: number) => {
        if (route.name === 'search_stack') {
          return null;
        }
        if (route.name !== 'middle_button') {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const realIndex = index > 2 ? index - 1 : index;
          const isFocused = state.index === realIndex;

          const onPress = () => {
            // PREVENT RESET HOME STACK.
            if (
              route.name === 'home_stack' &&
              isFocused &&
              (route?.state?.routes[route?.state?.routes.length - 1]?.name ===
                'hal_screen' ||
                route?.state?.routes[route?.state?.routes.length - 1]?.name ===
                  'carsi_screen' ||
                route?.state?.routes[route?.state?.routes.length - 1]?.name ===
                  'pazar_screen')
            ) {
              return;
            } else if (route.name === 'home_stack' && isFocused) {
              if (selectedAppState === 'carsi') {
                navigation.navigate('carsi_screen');
              } else if (selectedAppState === 'hal') {
                navigation.navigate('hal_screen');
              } else if (selectedAppState === 'pazar') {
                navigation.navigate('pazar_screen');
              }
              return;
            }
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.TouchableStyle}>
              {options.tabBarIcon &&
                options.tabBarIcon({
                  color: isFocused
                    ? convertAppStateToColor(selectedAppState)
                    : '#767676',
                  size: 25,
                  focused: isFocused,
                })}
              <Text
                style={[
                  styles.TextStyle as StyleProp<TextStyle>,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    color: isFocused
                      ? convertAppStateToColor(selectedAppState)
                      : '#484848',
                  },
                ]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        } else {
          return <MiddleTabButton navigation={navigation} key={index} />;
        }
      })}
    </View>
  );
};

export default CustomTabBar;
