import {useFormik} from 'formik';
import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TouchableOpacity,
} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomTextInput from '../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
import StarRatingSelectable from '../../../../components/micro-components/Controls/StarRatingSelectable/StarRatingSelectable';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import {styles} from './NewCommentContent.styles';
import newCommentValidation from './utility/new-comment.validation';

const NewCommentContent: React.FC<{onClose: () => void}> = ({onClose}) => {
  const formik = useFormik({
    initialValues: {
      starCount: 1,
      message: '',
    },
    validationSchema: newCommentValidation,
    onSubmit: (values) => {
      console.log(values);
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
            text="Ürün Hakkında Yorum Yap"
            textStyle={{color: COLORS.mainGreen}}
          />
          <DescriptionTypo text="Ürün hakkında yorum yapabilirsiniz." />
          <StarRatingSelectable
            rating={formik.values.starCount}
            containerStyle={globalStyles.marginTopTen}
            onRatingSelected={(rating) =>
              formik.setFieldValue('starCount', rating)
            }
          />
          <CustomTextInput
            textInputProps={{
              multiline: true,
              placeholder: 'Mesaj',
              textAlignVertical: 'top',
            }}
            style={styles.descriptionInputStyle}
          />
          <CustomButton
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

export default NewCommentContent;
