import {useFormik} from 'formik';
import React, {memo} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomTextInput from '../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
import ModalDropdown from '../../../../components/micro-components/Controls/ModalDropdown/ModalDropdown';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import {askQuestionAboutProduct} from '../../../../services/product-detail.service';
import {styles} from './AskAboutProductContent.styles';
import askAboutProductValidation from './utility/ask-about-product.validation';
import topicOptions from './utility/topic-options.data';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../store/reducers';
import {useNavigation} from '@react-navigation/native';
// @ts-ignore
import Toast from 'react-native-toast-message';

const AskAboutProductContent: React.FC<{
  onClose: () => void;
  productId: string;
}> = ({onClose, productId}) => {
  const insets = useSafeAreaInsets();
  const isGuest = useSelector((state: RootState) => state.AuthReducer.isGuest);
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: {
      title: '',
      topic: '',
      message: '',
    },
    validationSchema: askAboutProductValidation,
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
      askQuestionAboutProduct(
        productId,
        values.title,
        values.message,
        values.topic,
      )
        .then(() => {
          Toast.show({
            type: 'success',
            position: 'top',
            text1: 'Soru Başarılı',
            text2: 'Ürün hakkında sorunuz başarı ile gönderildi!',
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
            text1: 'Soru Başarısız',
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
            text="Ürün Hakkında Soru Sor"
            textStyle={{color: COLORS.mainGreen}}
          />
          <DescriptionTypo text="Ürün hakkında soru sorabilirsiniz." />
          <CustomTextInput
            textInputProps={{
              placeholder: 'Başlık',
              value: formik.values.title,
              onChangeText: formik.handleChange('title'),
            }}
            style={globalStyles.marginTopTen}
          />
          <ModalDropdown
            options={topicOptions}
            selectedVal={formik.values.topic}
            onValueChange={(toAdd, value) =>
              toAdd
                ? formik.setFieldValue('topic', value)
                : formik.setFieldValue('topic', null)
            }
            placeholderText="Konu"
            containerStyle={globalStyles.marginTopTen}
          />
          <CustomTextInput
            textInputProps={{
              multiline: true,
              placeholder: 'Mesaj',
              textAlignVertical: 'top',
              value: formik.values.message,
              onChangeText: formik.handleChange('message'),
            }}
            style={styles.descriptionInputStyle}
          />
          <CustomButton
            onPress={formik.handleSubmit}
            text="Gönder"
            loading={formik.isSubmitting}
            color={COLORS.mainGreen}
            textColor="#ffffff"
            containerStyle={globalStyles.marginTopTwenty}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default memo(AskAboutProductContent);
