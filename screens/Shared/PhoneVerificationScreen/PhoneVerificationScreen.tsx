import React, {useEffect, useRef, useState} from 'react';
import {View, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import {globalStyles} from '../../../assets/globalStyles.styles';
import DescriptionTypo from '../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../components/micro-components/Typography/H2Typo/H2Typo';
import {styles} from './PhoneVerificationScreen.styles';
import SendAgainButton from './SendAgainButton/SendAgainButton';
import SingleVerificationDigit from './SingleVerificationDigit/SingleVerificationDigit';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../types/navigation-types/stack-types/root-stack.type';
import {
  confirmSMSService,
  sendSMSService,
} from '../../../services/auth.service';
import {RouteProp} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setUserAction} from '../../../store/actions/auth.actions';
import AsyncStorage from '@react-native-community/async-storage';
// @ts-ignore
import Toast from 'react-native-toast-message';

type IPhoneVerificationRootNav = StackNavigationProp<
  RootStackParamList,
  'phone_verification_screen'
>;

const PhoneVerificationScreen: React.FC<{
  navigation: IPhoneVerificationRootNav;
  route: RouteProp<RootStackParamList, 'phone_verification_screen'>;
}> = ({navigation, route}) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const [verificationText, setVerificationText] = useState<string>('');
  const textInputRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => {
      textInputRef.current?.focus();
    }, 300);
  }, []);

  useEffect(() => {
    if (verificationText.length === 6) {
      confirmSMSService(route.params.JWT, verificationText)
        .then(async () => {
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Telefon Onayı Başarılı',
            text2: 'İpsizcambaz telefon onayı başarılı!',
            visibilityTime: 4000,
            autoHide: true,
            topOffset: insets.top + 20,
          });
          navigation.goBack();
          dispatch(setUserAction({...route.params.user, gsmConfirmed: true}));
          AsyncStorage.setItem('token', route.params.JWT);
          AsyncStorage.setItem(
            'user',
            JSON.stringify({...route.params.user, gsmConfirmed: true}),
          );
        })
        .catch((e) => {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Telefon Onayı Başarısız',
            text2: e?.response?.data?.message,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: insets.top + 20,
          });
          setVerificationText('');
        });
    }
  }, [verificationText, insets.top, navigation, route.params, dispatch]);

  useEffect(() => {
    sendSMSService(route.params.JWT);
  }, [route.params.JWT]);

  return (
    <View style={styles.container}>
      <H2Typo text="Telefon Onayı" textStyle={styles.headerText} />
      <DescriptionTypo
        text="Telefonunuza gelen onay kodunu giriniz."
        textStyle={globalStyles.marginTopTen}
      />

      <View style={styles.digitsContainer}>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <SingleVerificationDigit
              key={index}
              text={verificationText[index]}
            />
          ))}
      </View>
      {Platform.OS === 'ios' ? (
        <KeyboardAvoidingView keyboardVerticalOffset={90} behavior="padding">
          <SendAgainButton />
        </KeyboardAvoidingView>
      ) : (
        <SendAgainButton />
      )}

      <TextInput
        ref={textInputRef}
        style={styles.textInput}
        keyboardType="number-pad"
        value={verificationText}
        onChangeText={(text) => setVerificationText(text)}
      />
    </View>
  );
};

export default PhoneVerificationScreen;
