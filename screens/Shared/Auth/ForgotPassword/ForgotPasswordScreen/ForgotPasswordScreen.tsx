import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, ScrollView, Image} from 'react-native';
import {COLORS} from '../../../../../assets/colors';
import {globalStyles} from '../../../../../assets/globalStyles.styles';
import CustomButton from '../../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomCheckbox from '../../../../../components/micro-components/Controls/CustomCheckbox/CustomCheckbox';
import CustomTextInput from '../../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
import BottomDivider from '../../../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import DescriptionTypo from '../../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../../../components/micro-components/Typography/H2Typo/H2Typo';
import {ForgotPasswordStackParamList} from '../../../../../types/navigation-types/stack-types/forgot-password-stack.type';
import {RootStackParamList} from '../../../../../types/navigation-types/stack-types/root-stack.type';
import {styles} from './ForgotPasswordScreen.styles';

type IForgotPasswordNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'auth_stack'>,
  StackNavigationProp<ForgotPasswordStackParamList, 'password_forgot_screen'>
>;

const ForgotPasswordScreen: React.FC<{navigation: IForgotPasswordNav}> = ({
  navigation,
}) => {
  const [resetMethod, setResetMethod] = useState<'phone' | 'email' | null>(
    null,
  );

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
          <View style={globalStyles.flexRow}>
            <CustomCheckbox
              text="E-Mail"
              containerStyle={globalStyles.marginTopTwenty}
              value={resetMethod === 'email'}
              onValueChange={(val) =>
                val ? setResetMethod('email') : setResetMethod(null)
              }
            />
            <CustomCheckbox
              text="GSM"
              containerStyle={{
                ...globalStyles.marginTopTwenty,
                ...globalStyles.marginLeftTen,
              }}
              value={resetMethod === 'phone'}
              onValueChange={(val) =>
                val ? setResetMethod('phone') : setResetMethod(null)
              }
            />
          </View>
          <CustomTextInput
            style={globalStyles.marginTopTwenty}
            textInputProps={{
              placeholder:
                resetMethod === 'email'
                  ? 'E-Mail'
                  : resetMethod === 'phone'
                  ? 'Telefon'
                  : 'Method Seçiniz',
            }}
          />
          <CustomButton
            color={COLORS.mainGreen}
            textColor="white"
            onPress={() => navigation.navigate('select_forgot_method_screen')}
            text="Gönder"
            containerStyle={globalStyles.marginTopTwenty}
          />
        </View>
        <BottomDivider />
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordScreen;
