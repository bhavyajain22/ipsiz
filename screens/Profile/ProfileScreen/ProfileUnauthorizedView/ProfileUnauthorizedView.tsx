import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {memo} from 'react';
import {View} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomFadeInView from '../../../../components/micro-components/CustomFadeInView/CustomFadeInView';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import {ProfileStackParamList} from '../../../../types/navigation-types/stack-types/profile-stack.type';
import {RootStackParamList} from '../../../../types/navigation-types/stack-types/root-stack.type';
import {MainTabParamList} from '../../../../types/navigation-types/tab-types/main-tab.type';
import {styles} from './ProfileUnauthorizedView.styles';

type IProfileNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'tab_stack'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<MainTabParamList, 'profile_stack'>,
    StackNavigationProp<ProfileStackParamList, 'profile_screen'>
  >
>;

const ProfileUnauthorizedView = () => {
  const navigation = useNavigation<IProfileNav>();

  return (
    <CustomFadeInView style={styles.container}>
      <>
        <View style={styles.iconContainer}>
          <FontAwesome5
            name="bags-shopping"
            light
            size={60}
            color={COLORS.mainGreen}
          />
        </View>
        <View style={styles.bottomContainer}>
          <H3Typo text="Hesabım" />
          <DescriptionTypo
            text="Hesabınızı görüntüleyebilmek için lütfen giriş yapın. Siparişlerinizi ve üyelik durumunuzu hesabımdan takip edebilirsiniz."
            textStyle={styles.descriptionText}
          />
          <CustomButton
            onPress={() => navigation.navigate('auth_stack')}
            text="Giriş Yap"
            color={COLORS.mainGreen}
            textColor="white"
            containerStyle={styles.loginButton}
          />
        </View>
      </>
    </CustomFadeInView>
  );
};

export default memo(ProfileUnauthorizedView);
