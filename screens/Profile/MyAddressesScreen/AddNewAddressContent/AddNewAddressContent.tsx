import {useFormik} from 'formik';
import React, {memo, useEffect, useMemo, useState} from 'react';
import {View, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../../../../assets/colors';
import {globalStyles} from '../../../../assets/globalStyles.styles';
import CustomButton from '../../../../components/micro-components/Controls/CustomButton/CustomButton';
import CustomTextInput from '../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
// import CustomTextInput from '../../../../components/micro-components/Controls/CustomTextInput/CustomTextInput';
import IconedMaskedTextInput from '../../../../components/micro-components/Controls/IconedMaskedTextInput/IconedMaskedTextInput';
import IconedTextInput from '../../../../components/micro-components/Controls/IconedTextInput/IconedTextInput';
import ModalDropdown from '../../../../components/micro-components/Controls/ModalDropdown/ModalDropdown';
import InputError from '../../../../components/micro-components/InputError/InputError';
import {
  getCities,
  getCounties,
} from '../../../../services/profile-services/address.service';
import {
  ICity,
  ICounty,
} from '../../../../types/response-types/profile-types/address.types';
import {styles} from './AddNewAddressContent.styles';
import addNewAddresSchema from './utility/addNewAddres.validation';

const AddNewAddressContent: React.FC<{addressType: string}> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addressType,
}) => {
  const [availableCities, setAvailableCities] = useState<ICity[]>([]);
  const [availableCounties, setAvailableCounties] = useState<ICounty[]>([]);

  const formik = useFormik({
    initialValues: {
      addressTitle: '',
      phoneNumber: '',
      city: '',
      district: '',
      postalCode: '',
      addressDetail: '',
      identityNumber: '',
    },
    validationSchema: addNewAddresSchema,
    onSubmit: async () => null,
  });

  useEffect(() => {
    getCities().then(({data: {data}}) => {
      setAvailableCities(data);
    });
  }, []);

  useEffect(() => {
    if (formik.values.city) {
      // RESET SELECTED DISTRICT HERE.
      formik.setFieldValue('district', '');
      getCounties(formik.values.city).then(({data: {data}}) => {
        setAvailableCounties(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.city]);

  const convertCitiesToDropdown = useMemo(
    () =>
      availableCities.map((city) => ({
        value: city._id,
        title: city.name,
      })),
    [availableCities],
  );

  const convertCountiesToDropdown = useMemo(
    () =>
      availableCounties.map((county) => ({
        value: county._id,
        title: county.name,
      })),
    [availableCounties],
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* ADRES BASLIGI */}
        <IconedTextInput
          iconName="building"
          textInputProps={{
            placeholder: 'Adres Başlığı',
            onBlur: formik.handleBlur('addressTitle'),
            value: formik.values.addressTitle,
            onChangeText: formik.handleChange('addressTitle'),
          }}
          style={styles.textInput}
          containerStyle={globalStyles.marginTopTen}
        />
        <InputError
          errorText={formik.errors.addressTitle as string}
          errorShown={
            formik.errors.addressTitle && formik.touched.addressTitle
              ? true
              : false
          }
        />
        {/* TELEFON NUMARASI */}
        <IconedMaskedTextInput
          iconName="phone"
          type={'custom'}
          textInputProps={{
            placeholder: 'Telefon Numarası',
            keyboardType: 'number-pad',
            options: {
              mask: '(999) 999 99 99',
            },
            onChangeText: formik.handleChange('phoneNumber'),
            onBlur: formik.handleBlur('phoneNumber'),
            value: formik.values.phoneNumber,
          }}
          style={styles.textInput}
          containerStyle={globalStyles.marginTopTen}
        />
        {/* SEHIR */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome5
              name="map-pin"
              size={30}
              color={COLORS.mainGreen}
            />
          </View>
          <ModalDropdown
            options={convertCitiesToDropdown}
            selectedVal={formik.values.city}
            onValueChange={(toAdd, value) =>
              toAdd
                ? formik.setFieldValue('city', value)
                : formik.setFieldValue('city', null)
            }
            placeholderText="Şehir"
            containerStyle={styles.modalInput}
          />
        </View>
        {/* ILCE */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer} />
          <ModalDropdown
            options={convertCountiesToDropdown}
            selectedVal={formik.values.district}
            onValueChange={(toAdd, value) =>
              toAdd
                ? formik.setFieldValue('district', value)
                : formik.setFieldValue('district', null)
            }
            placeholderText="İlçe"
            containerStyle={styles.modalInput}
          />
        </View>
        {/* POSTA KODU */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer} />
          <CustomTextInput
            textInputProps={{
              placeholder: 'Posta Kodu',
              onChangeText: formik.handleChange('postalCode'),
              onBlur: formik.handleBlur('postalCode'),
              value: formik.values.postalCode,
              keyboardType: 'number-pad',
            }}
            style={styles.postalCode}
          />
        </View>
        {/* ADRES DETAYI */}
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer} />
          <CustomTextInput
            textInputProps={{
              multiline: true,
              placeholder: 'Adres Detayı',
              textAlignVertical: 'top',
              value: formik.values.addressDetail,
              onChangeText: formik.handleChange('addressDetail'),
            }}
            style={styles.addressDetailInput}
          />
        </View>
        {/* ADRES BASLIGI */}
        <IconedTextInput
          iconName="user"
          textInputProps={{
            placeholder: 'TC Kimlik No',
            onBlur: formik.handleBlur('identityNumber'),
            value: formik.values.identityNumber,
            onChangeText: formik.handleChange('identityNumber'),
          }}
          style={styles.textInput}
          containerStyle={globalStyles.marginTopTen}
        />
        <InputError
          errorText={formik.errors.identityNumber as string}
          errorShown={
            formik.errors.identityNumber && formik.touched.identityNumber
              ? true
              : false
          }
        />
        <CustomButton
          color={COLORS.mainGreen}
          textColor="white"
          text="Adres Ekle"
          containerStyle={globalStyles.marginTopTwenty}
          loading={formik.isSubmitting}
          onPress={formik.handleSubmit}
        />
      </ScrollView>
    </View>
  );
};

export default memo(AddNewAddressContent);
