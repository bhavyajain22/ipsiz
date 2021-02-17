import React from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {COLORS} from '../../../../../assets/colors';
import {globalStyles} from '../../../../../assets/globalStyles.styles';
import CustomButton from '../../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomTextInput from '../../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
import BottomDivider from '../../../../../components/micro-components/Divider/BottomDivider/BottomDivider';
import DescriptionTypo from '../../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H2Typo from '../../../../../components/micro-components/Typography/H2Typo/H2Typo';
import {styles} from './ForgotPasswordContent.styles';

const ForgotPasswordContent: React.FC<{onClose: () => void}> = ({onClose}) => {
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

          <TouchableOpacity
            style={styles.closeButtonContainer}
            onPress={onClose}>
            <FontAwesome5 name="times" light size={35} color="#767676" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentCard}>
          <H2Typo
            text="Şifremi Unuttum"
            textStyle={{color: COLORS.mainGreen}}
          />
          <DescriptionTypo
            textStyle={globalStyles.marginTopTen}
            text="Yeni şifre belirlemek için kayıtlı e-posta adresinizi yazınız."
          />
          <CustomTextInput
            style={globalStyles.marginTopTwenty}
            textInputProps={{
              placeholder: 'E-Posta',
            }}
          />
          <CustomButton
            color={COLORS.mainGreen}
            textColor="white"
            text="Gönder"
            containerStyle={globalStyles.marginTopTwenty}
          />
        </View>
        <BottomDivider />
      </ScrollView>
    </View>
  );
};

export default ForgotPasswordContent;
