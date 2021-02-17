import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {COLORS} from '../../../../../assets/colors';
import {globalStyles} from '../../../../../assets/globalStyles.styles';
import CustomButton from '../../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomCheckbox from '../../../../../components/micro-components/Controls/CustomCheckbox/CustomCheckbox';
import BottomDivider from '../../../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import DescriptionTypo from '../../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../../../components/micro-components/Typography/H2Typo/H2Typo';
import {ForgotPasswordStackParamList} from '../../../../../types/navigation-types/stack-types/forgot-password-stack.type';
import {RootStackParamList} from '../../../../../types/navigation-types/stack-types/root-stack.type';
import {styles} from './SelectForgotMethodScreen.styles';

type ISelectForgotMethodNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'auth_stack'>,
  StackNavigationProp<ForgotPasswordStackParamList, 'password_forgot_screen'>
>;

const SelectForgotMethodScreen: React.FC<{
  navigation: ISelectForgotMethodNav;
}> = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topContainer}>
          <Image
            source={{
              uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
            }}
            style={styles.logo}
          />
        </View>
        <View style={styles.contentCard}>
          <H2Typo
            text="Şifremi Unuttum"
            textStyle={{color: COLORS.mainGreen}}
          />
          <DescriptionTypo
            textStyle={globalStyles.marginTopTen}
            text="Yeni şifre belirlemek için kayıtlı e-posta adresinizi veya GSM numaranızı yazınız."
          />
          <CustomCheckbox
            text="b*********@gmail.com"
            containerStyle={globalStyles.marginTopTwenty}
          />
          <CustomCheckbox
            text="+90503*****23"
            containerStyle={globalStyles.marginTopTwenty}
          />
          <CustomButton
            color={COLORS.mainGreen}
            textColor="white"
            onPress={() => navigation.navigate('forgot_code_screen')}
            text="Seç"
            containerStyle={globalStyles.marginTopTwenty}
          />
        </View>
        <BottomDivider />
      </ScrollView>
    </View>
  );
};

export default SelectForgotMethodScreen;
