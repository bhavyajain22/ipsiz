import AsyncStorage from '@react-native-community/async-storage';
import {useFormik} from 'formik';
import React, {memo, useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomTextInput from '../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
import InputError from '../../../../components/micro-components/InputError/InputError';
import CustomModal from '../../../../components/micro-components/Modal/CustomModal/CustomModal';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import HeaderTypo from '../../../../components/micro-components/Typography/HeaderTypo/HeaderTypo';
import SmallTypo from '../../../../components/micro-components/Typography/SmallTypo/SmallTypo';
import {loginService} from '../../../../services/auth.service';
import {setUserAction} from '../../../../store/actions/auth.actions';
import ForgotPasswordContent from './ForgotPasswordContent/ForgotPasswordContent';
import {styles} from './LoginTab.styles';
import loginSchema from './utility/login.validation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../../types/navigation-types/stack-types/root-stack.type';
// @ts-ignore
import Toast from 'react-native-toast-message';
// FB-SDK


type IAuthScreenRootNav = StackNavigationProp<RootStackParamList, 'auth_stack'>;

const LoginTab = () => {
  const navigation = useNavigation<IAuthScreenRootNav>();
  const insets = useSafeAreaInsets();
  const [forgotPasswordModalVisible, setForgotPasswordModalVisible] = useState<
    boolean
  >(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values, actions) => {
      actions.setSubmitting(true);
      try {
        const {
          data: {user, JWT},
        } = await loginService(values.email, values.password);
        if (user.gsmConfirmed) {
          dispatch(setUserAction(user));
          AsyncStorage.setItem('token', JWT);
          AsyncStorage.setItem('user', JSON.stringify(user));
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Giriş Başarılı',
            text2: 'İpsizcambaz girişiniz başarılı',
            visibilityTime: 4000,
            autoHide: true,
            topOffset: insets.top + 20,
          });
          navigation.goBack();
        } else {
          navigation.replace('phone_verification_screen', {user, JWT});
        }
        actions.setSubmitting(false);
      } catch (e) {
        Toast.show({
          type: 'error',
          position: 'top',
          text1: 'Giriş Başarısız',
          text2: 'Hatalı Kullanıcı adı ya da şifre',
          visibilityTime: 4000,
          autoHide: true,
          topOffset: insets.top + 20,
        });
        actions.setSubmitting(false);
      }
    },
  });
/*
  const handleFacebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
          AccessToken.getCurrentAccessToken().then((data) => {
            console.log(data.accessToken.toString());
            fetch(
              'https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' +
                data.accessToken.toString(),
            )
              .then((response) => response.json())
              .then((json) => {
                const user = {};
                // Some user object has been set up somewhere, build that user here
                user.name = json.name;
                user.id = json.id;
                user.user_friends = json.friends;
                user.email = json.email;
                user.username = json.name;
                user.loading = false;
                user.loggedIn = true;
                console.log(user);
              })
              .catch(() => {
                reject('ERROR GETTING DATA FROM FACEBOOK');
              });
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  // Somewhere in your code
  const signIn = async () => {
    GoogleSignin.configure({
      iosClientId:
        '865230582593-4poaaqgkfcecitqugmmmjivebme8a5gi.apps.googleusercontent.com',
      webClientId:
        '865230582593-e6k48337ng7k7tfgsd5th81tmfiusph8.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };
*/
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity /*onPress={handleFacebookLogin} color="#4267B2"*/>
          <Text>FACEBOOK LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity /*onPress={signIn} color="#4267B2"*/>
          <Text>GOOGLE LOGIN</Text>
        </TouchableOpacity>
        <HeaderTypo textStyle={styles.headerText} text="Giriş Yap" />
        <DescriptionTypo text="Buradan İpsizcambaz’ın sihirli dünyasına giriş yapabilirsiniz." />
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
          errorShown={
            formik.errors.email && formik.touched.email ? true : false
          }
        />
        <CustomTextInput
          style={globalStyles.marginTopTwenty}
          textInputProps={{
            placeholder: 'Şifre',
            onChangeText: formik.handleChange('password'),
            onBlur: formik.handleBlur('password'),
            value: formik.values.password,
            autoCapitalize: 'none',
            secureTextEntry: true,
          }}
        />
        <InputError
          errorText={formik.errors.password as string}
          errorShown={
            formik.errors.password && formik.touched.password ? true : false
          }
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('forgot_password_stack')}>
          <SmallTypo
            text="Şifremi Unuttum?"
            textStyle={{
              color: COLORS.mainGreen,
              ...globalStyles.marginTopTen,
            }}
          />
        </TouchableOpacity>
        <CustomButton
          loading={formik.isSubmitting}
          color={COLORS.mainGreen}
          textColor="white"
          text="Giriş Yap"
          containerStyle={globalStyles.marginTopTwenty}
          onPress={formik.handleSubmit}
        />
        <View style={styles.orText}>
          <SmallTypo text="Veya" />
        </View>
        <View>
          <CustomButton
            icon={{
              iconName: 'facebook',
              iconType: 'brand',
              iconSize: 20,
              iconColor: '#ffffff',
            }}
            color="#415A94"
            textColor="white"
            text="Facebook İle Giriş"
            containerStyle={{...globalStyles.marginTopTwenty}}
          />
          <CustomButton
            onPress={() => null}
            icon={{
              iconName: 'google',
              iconType: 'brand',
              iconSize: 20,
              iconColor: '#ffffff',
            }}
            color="#CE5542"
            textColor="white"
            text="Google İle Giriş"
            containerStyle={{
              ...globalStyles.marginTopTwenty,
            }}
          />
        </View>
      </ScrollView>
      <CustomModal
        avoidKeyboard
        onBackButtonPress={() => setForgotPasswordModalVisible(false)}
        isVisible={forgotPasswordModalVisible}
        onClose={() => setForgotPasswordModalVisible(false)}>
        <ForgotPasswordContent
          onClose={() => setForgotPasswordModalVisible(false)}
        />
      </CustomModal>
    </>
  );
};

export default memo(LoginTab);
