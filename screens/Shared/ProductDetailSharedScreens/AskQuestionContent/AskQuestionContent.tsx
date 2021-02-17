import {useNavigation} from '@react-navigation/native';
import {useFormik} from 'formik';
import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import {useSelector} from 'react-redux';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomTextInput from '../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import {sendMessageToStore} from '../../../../services/product-detail.service';
import {RootState} from '../../../../store/reducers';
import {styles} from './AskQuestionContent.styles';
import askQuestionValidation from './utility/ask-question.validation';
// @ts-ignore
import Toast from 'react-native-toast-message';

const AskQuestionContent: React.FC<{
  onClose: () => void;
  productId: string;
}> = ({onClose, productId}) => {
  const insets = useSafeAreaInsets();
  const isGuest = useSelector((state: RootState) => state.AuthReducer.isGuest);
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: askQuestionValidation,
    onSubmit: (values, actions) => {
      if (isGuest) {
        actions.setSubmitting(false);
        onClose();
        setTimeout(() => {
          navigation.navigate('auth_stack');
        }, 500);
        return;
      }

      actions.setSubmitting(true);
      sendMessageToStore(productId, values.message)
        .then(() => {
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Mesaj Başarılı',
            text2: 'Ürün hakkında mesajınız başarı ile gönderildi!',
            visibilityTime: 4000,
            autoHide: true,
            topOffset: insets.top + 20,
          });
          onClose();
          actions.setSubmitting(false);
        })
        .catch((e) => {
          Toast.show({
            type: 'error',
            position: 'top',
            text1: 'Mesaj Başarısız',
            text2: e?.response?.data,
            visibilityTime: 4000,
            autoHide: true,
            topOffset: insets.top + 20,
          });
          actions.setSubmitting(false);
        });
    },
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainBack}>
          <Image
            source={{
              uri: 'https://www.ipsizcambaz.com/cdn/assets/images/logo.png',
            }}
            style={styles.logoStyle}
          />
          <TouchableOpacity onPress={onClose} style={styles.closeIconStyle}>
            <FontAwesome5 name="times" light size={30} color="#767676" />
          </TouchableOpacity>
        </View>

        <View style={styles.cardStyle}>
          <H3Typo
            text="Mağazaya Soru Sor"
            textStyle={{color: COLORS.mainGreen}}
          />
          <DescriptionTypo text="Mağazaya buradan ürün hakkında soru sorabilirsiniz." />
          <CustomTextInput
            textInputProps={{
              multiline: true,
              placeholder: 'Mesaj',
              textAlignVertical: 'top',
              value: formik.values.message,
              onChangeText: formik.handleChange('message'),
            }}
            style={styles.textInputStyle}
          />
          <CustomButton
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
            text="Gönder"
            color={COLORS.mainGreen}
            textColor="#ffffff"
            containerStyle={globalStyles.marginTopTwenty}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AskQuestionContent;
