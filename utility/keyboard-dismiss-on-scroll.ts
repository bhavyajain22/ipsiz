import {Keyboard, Platform} from 'react-native';

export const keyboardDismissOnScroll:
  | {keyboardDismissMode: 'on-drag' | 'interactive' | 'none'}
  | {onScrollBeginDrag: () => any} =
  Platform.OS === 'ios'
    ? {keyboardDismissMode: 'on-drag'}
    : {onScrollBeginDrag: Keyboard.dismiss};
