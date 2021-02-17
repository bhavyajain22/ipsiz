import React, {memo} from 'react';
import {ScrollView, View} from 'react-native';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomTextInput from '../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import HeaderTypo from '../../../../components/micro-components/Typography/HeaderTypo/HeaderTypo';
import {styles} from './SignupTab.styles';
import CustomMaskedTextInput from '../../../../components/micro-components/Controls/CustomMaskedTextInput/CustomMaskedTextInput';
import CustomCheckbox from '../../../../components/micro-components/Controls/CustomCheckbox/CustomCheckbox';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import {COLORS} from '../../../../assets/colors';
import {useFormik} from 'formik';
import registerSchema from './utility/register.validation';
import InputError from '../../../../components/micro-components/InputError/InputError';
// import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {registerService} from '../../../../services/auth.service';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../types/navigation-types/stack-types/root-stack.type';
// @ts-ignore
import Toast from 'react-native-toast-message';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type IAuthScreenRootNav = StackNavigationProp<RootStackParamList, 'auth_stack'>;

const SignupTab = () => {
  const navigation = useNavigation<IAuthScreenRootNav>();
  const insets = useSafeAreaInsets();
  const [firstCheckbox, setFirstCheckbox] = React.useState(false);
  const [secondCheckbox, setSecondCheckbox] = React.useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      gsm: '',
      password: '',
      passwordConfirmation: '',
      bulletinPermission: false,
    },
    validationSchema: registerSchema,
    onSubmit: async (values, actions) => {
      actions.setSubmitting(true);
      try {
        const {
          data: {user, JWT},
        } = await registerService(
          values.firstName,
          values.lastName,
          values.email,
          values.gsm.replace(/[(|)|\s]/gm, ''),
          values.password,
          values.bulletinPermission,
        );
        navigation.replace('phone_verification_screen', {user, JWT});
        actions.setSubmitting(false);
      } catch (e) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Kayıt Başarısız',
          text2: e?.response?.data?.message,
          visibilityTime: 4000,
          autoHide: true,
          topOffset: insets.top + 20,
        });
        actions.setSubmitting(false);
      }
    },
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}>
      <HeaderTypo textStyle={styles.headerText} text="Üye Ol" />
      <DescriptionTypo text="Buradan İpsizcambaz’ın sihirli dünyasına katılabilirsiniz." />
      {/** EMAIL */}
      <CustomTextInput
        style={globalStyles.marginTopTwenty}
        textInputProps={{
          placeholder: 'E-Posta',
          onChangeText: formik.handleChange('email'),
          onBlur: formik.handleBlur('email'),
          value: formik.values.email,
          autoCapitalize: 'none',
        }}
      />
      <InputError
        errorText={formik.errors.email as string}
        errorShown={formik.errors.email && formik.touched.email ? true : false}
      />
      {/** FIRST NAME */}
      <CustomTextInput
        style={globalStyles.marginTopTwenty}
        textInputProps={{
          placeholder: 'Ad',
          onChangeText: formik.handleChange('firstName'),
          onBlur: formik.handleBlur('firstName'),
          value: formik.values.firstName,
        }}
      />
      <InputError
        errorText={formik.errors.firstName as string}
        errorShown={
          formik.errors.firstName && formik.touched.firstName ? true : false
        }
      />
      {/** LAST NAME */}
      <CustomTextInput
        style={globalStyles.marginTopTwenty}
        textInputProps={{
          placeholder: 'Soyad',
          onChangeText: formik.handleChange('lastName'),
          onBlur: formik.handleBlur('lastName'),
          value: formik.values.lastName,
        }}
      />
      <InputError
        errorText={formik.errors.lastName as string}
        errorShown={
          formik.errors.lastName && formik.touched.lastName ? true : false
        }
      />
      {/** GSM */}
      <CustomMaskedTextInput
        type={'custom'}
        style={globalStyles.marginTopTwenty}
        textInputProps={{
          placeholder: 'Telefon',
          keyboardType: 'number-pad',
          options: {
            mask: '(999) 999 99 99',
          },
          onChangeText: formik.handleChange('gsm'),
          onBlur: formik.handleBlur('gsm'),
          value: formik.values.gsm,
        }}
      />
      <InputError
        errorText={formik.errors.gsm as string}
        errorShown={formik.errors.gsm && formik.touched.gsm ? true : false}
      />
      {/** PASSWORD */}
      <CustomTextInput
        style={globalStyles.marginTopTwenty}
        textInputProps={{
          secureTextEntry: true,
          placeholder: 'Şifre',
          onChangeText: formik.handleChange('password'),
          onBlur: formik.handleBlur('password'),
          value: formik.values.password,
        }}
      />
      <InputError
        errorText={formik.errors.password as string}
        errorShown={
          formik.errors.password && formik.touched.password ? true : false
        }
      />
      {/** PASSWORD CONFIRMATION */}
      <CustomTextInput
        style={globalStyles.marginTopTwenty}
        textInputProps={{
          secureTextEntry: true,
          placeholder: 'Şifre Tekrarı',
          onChangeText: formik.handleChange('passwordConfirmation'),
          onBlur: formik.handleBlur('passwordConfirmation'),
          value: formik.values.passwordConfirmation,
        }}
      />
      <InputError
        errorText={formik.errors.passwordConfirmation as string}
        errorShown={
          formik.errors.passwordConfirmation &&
          formik.touched.passwordConfirmation
            ? true
            : false
        }
      />
      <View style={styles.checkboxContainer}>
        <CustomCheckbox
          text="Üyelik Sözleşmesi okudum ve kabul ediyorum."
          containerStyle={globalStyles.marginTopTwenty}
          value={firstCheckbox}
          onValueChange={(val) => setFirstCheckbox(val)}
        />
        <CustomCheckbox
          text="Kullanım Koşulları okudum ve kabul ediyorum."
          containerStyle={globalStyles.marginTopTen}
          value={secondCheckbox}
          onValueChange={(val) => setSecondCheckbox(val)}
        />
        <CustomCheckbox
          text="İpsizcambaz önemli kampanyalardan haberdar olmak için Aydınlatma ve Rıza Metni kapsamında elektronik ileti almak istiyorum."
          containerStyle={globalStyles.marginTopTen}
          value={formik.values.bulletinPermission}
          onValueChange={(val) =>
            formik.setFieldValue('bulletinPermission', val)
          }
        />
      </View>
      <CustomButton
        color={COLORS.mainGreen}
        textColor="white"
        text="Üye Ol"
        containerStyle={globalStyles.marginTopTwenty}
        loading={formik.isSubmitting}
        onPress={formik.handleSubmit}
      />
    </ScrollView>
  );
};

export default memo(SignupTab);
