import {useFormik} from 'formik';
import React, {memo} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Image,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomTextInput from '../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
import ModalDropdown from '../../../../components/micro-components/Controls/ModalDropdown/ModalDropdown';
import DescriptionTypo from '../../../../components/micro-components/Typography/DescriptionTypo/DescriptionTypo';
import H3Typo from '../../../../components/micro-components/Typography/H3Typo/H3Typo';
import {styles} from './SetPriceAlarmContent.styles';
import alarmDateOptions from './utility/alarm-dates.data';
import setAlarmValidation from './utility/set-alarm.validation';

const SetPriceAlarmContent: React.FC<{onClose: () => void}> = ({onClose}) => {
  const formik = useFormik({
    initialValues: {
      alarmDuration: null,
      expectedPrice: '',
    },
    validationSchema: setAlarmValidation,
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
            text="Ürün İçin Fiyat Alarmı Kur"
            textStyle={{color: COLORS.mainGreen}}
          />
          <DescriptionTypo text="Ürün ürüne fiyat alarmı ekleyebilirsiniz." />
          <CustomTextInput
            textInputProps={{
              placeholder: 'Başlık',
            }}
            style={globalStyles.marginTopTen}
          />
          <ModalDropdown
            options={alarmDateOptions}
            selectedVal={formik.values.alarmDuration}
            onValueChange={(toAdd, value) =>
              toAdd
                ? formik.setFieldValue('alarmDuration', value)
                : formik.setFieldValue('alarmDuration', null)
            }
            placeholderText="Alarm Süresi"
            containerStyle={globalStyles.marginTopTen}
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

export default memo(SetPriceAlarmContent);
