import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useRef, useState, useEffect} from 'react';
import {View, KeyboardAvoidingView, Platform, TextInput} from 'react-native';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {globalStyles} from '../../../../../assets/globalStyles.styles';
import DescriptionTypo from '../../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../../../components/micro-components/Typography/H2Typo/H2Typo';
import {ForgotPasswordStackParamList} from '../../../../../types/navigation-types/stack-types/forgot-password-stack.type';
import {RootStackParamList} from '../../../../../types/navigation-types/stack-types/root-stack.type';
import SendAgainButton from '../../../PhoneVerificationScreen/SendAgainButton/SendAgainButton';
import SingleVerificationDigit from '../../../PhoneVerificationScreen/SingleVerificationDigit/SingleVerificationDigit';
import {styles} from './ForgotCodeScreen.styles';

type IForgotCodeNav = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'auth_stack'>,
  StackNavigationProp<ForgotPasswordStackParamList, 'password_forgot_screen'>
>;

const ForgotCodeScreen: React.FC<{navigation: IForgotCodeNav}> = () => {
  // const insets = useSafeAreaInsets();
  const [verificationText, setVerificationText] = useState<string>('');
  const textInputRef = useRef<any>(null);

  useEffect(() => {
    setTimeout(() => {
      textInputRef.current?.focus();
    }, 300);
  }, []);

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

export default ForgotCodeScreen;
