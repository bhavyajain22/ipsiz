import React, {useState} from 'react';
import {Animated, View} from 'react-native';
import {styles} from './MiddleTabButton.styles';
import ChildButton from './ChildButton/ChildButton';
import {NavigationHelpers, ParamListBase} from '@react-navigation/native';
import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { FontAwesome5 } from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducers';
import {convertAppStateToColor} from '../../../utility/app-state-to-color';

const MiddleTabButton: React.FC<{
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}> = ({navigation}) => {
  const [openButtonState, setOpenButtonState] = useState(false);
  const selectedAppState = useSelector(
    (state: RootState) => state.AppReducer.selectedAppState,
  );

  return (
    <View style={styles.WrapperViewStyle}>
      <Animated.View style={styles.touchableWrapper}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.TouchableStyle,
            backgroundColor: convertAppStateToColor(selectedAppState),
          }}
          onPress={() => setOpenButtonState((prev) => !prev)}>
          <FontAwesome5 name="store" size={25} color="#ffffff" light />
        </TouchableOpacity>
      </Animated.View>
      <ChildButton
        onClose={() => setOpenButtonState(false)}
        navigation={navigation}
        pos="middle"
        openState={openButtonState}
      />
      <ChildButton
        onClose={() => setOpenButtonState(false)}
        navigation={navigation}
        pos="right"
        openState={openButtonState}
      />
      <ChildButton
        onClose={() => setOpenButtonState(false)}
        navigation={navigation}
        pos="left"
        openState={openButtonState}
      />
    </View>
  );
};

export default MiddleTabButton;
