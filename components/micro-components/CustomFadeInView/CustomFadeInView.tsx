import React, {memo, ReactElement} from 'react';
import {ViewStyle} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {styles} from './CustomFadeInView.styles';
// @ts-ignore
import FadeInView from 'react-native-fade-in-view';

const CustomFadeInView: React.FC<{
  duration?: number;
  style?: ViewStyle;
  onFadeComplete?: () => any;
  children: ReactElement;
}> = ({duration, style, onFadeComplete, children}) => {
  return (
    <FadeInView
      duration={duration}
      style={style}
      onFadeComplete={onFadeComplete}>
      {children}
    </FadeInView>
  );
};

export default memo(CustomFadeInView);
