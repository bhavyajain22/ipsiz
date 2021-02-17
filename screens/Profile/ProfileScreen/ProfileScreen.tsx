import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './ProfileScreen.styles';
import {StackNavigationProp} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../assets/colors';
import {getProfileRoutes, IProfileItem} from './utility/profile-items.utility';
import BottomDivider from '../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import {ProfileStackParamList} from '../../../types/navigation-types/stack-types/profile-stack.type';
import {CompositeNavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../types/navigation-types/stack-types/root-stack.type';
import {MainTabParamList} from '../../../types/navigation-types/tab-types/main-tab.type';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/reducers';
import ProfileUnauthorizedView from './ProfileUnauthorizedView/ProfileUnauthorizedView';
import CustomFadeInView from '../../../components/micro-components/CustomFadeInView/CustomFadeInView';
// @ts-ignore
import Toast from 'react-native-toast-message';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {logoutAction} from '../../../store/actions/auth.actions';
import {logoutService} from '../../../services/auth.service';
import AsyncStorage from '@react-native-community/async-storage';

type IProfileNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'tab_stack'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'profile_stack'>,
    StackNavigationProp<ProfileStackParamList, 'profile_screen'>
  >
>;

const ProfileScreen: React.FC<{
  navigation: IProfileNav;
}> = (props) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const guestUserStatus = useSelector(
    (state: RootState) => state.AuthReducer.isGuest,
  );

  const handlePress = (item: IProfileItem) => {
    if (item.path) {
      props.navigation.navigate(item.path);
    } else {
      item.functionOnClick && item.functionOnClick();
    }
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    logoutService();
    Toast.show({
      type: 'success',
      position: 'top',
      text1: 'Başarılı Çıkış',
      text2: "İpsizcambazdan'dan çıkış işlemi başarılı!",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: insets.top + 20,
    });
    AsyncStorage.multiRemove(['token', 'user']);
  };

  return guestUserStatus ? (
    <ProfileUnauthorizedView />
  ) : (
    <ScrollView style={styles.mainContainer}>
      <CustomFadeInView>
        <>
          <View style={styles.topDivider} />
          <View style={styles.itemsContainer}>
            {getProfileRoutes(
              {my_notifications: 3},
              {log_out: handleLogout},
            ).map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.itemTouchable}
                onPress={() => handlePress(item)}>
                <View style={styles.iconContainer}>
                  <FontAwesome5
                    name={item.iconName}
                    size={28}
                    color={COLORS.midGray}
                  />
                </View>
                <View style={styles.itemTextContainer}>
                  <Text style={styles.itemText}>{item.title}</Text>
                  {item.badgeCount && (
                    <View style={styles.badgeContainer}>
                      <Text style={styles.badgeText}>{item.badgeCount}</Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
          <BottomDivider />
        </>
      </CustomFadeInView>
    </ScrollView>
  );
};

export default ProfileScreen;
