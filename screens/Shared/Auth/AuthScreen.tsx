import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {COLORS} from '../../../assets/colors';
import RegularTabView from '../../../components/micro-components/RegularTabView/RegularTabView';
import {styles} from './AuthScreen.styles';
import LoginTab from './LoginTab/LoginTab';
import SignupTab from './SignupTab/SignupTab';

const AuthScreen = () => {
  return (
    <>
      <RegularTabView
        tabActiveColor={COLORS.mainGreen}
        tabInactiveColor={COLORS.midGray}
        containerStyle={styles.container}
        startingIndex={0}
        labelTextStyle={styles.tabLabelText}
        routes={[
          {key: 'login', title: 'Giriş Yap'},
          {key: 'sign_up', title: 'Üye Ol'},
        ]}
        scenesObj={{login: () => <LoginTab />, sign_up: () => <SignupTab />}}
      />
      {Platform.OS === 'ios' && (
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyboardAvoidingStyle}
          keyboardVerticalOffset={100}
        />
      )}
    </>
  );
};

export default AuthScreen;
