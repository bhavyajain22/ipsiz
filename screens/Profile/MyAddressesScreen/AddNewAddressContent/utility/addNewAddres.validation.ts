import * as Yup from 'yup';

const addNewAddresSchema = Yup.object().shape({
  addressTitle: Yup.string().trim().required('Gerekli Alan'),
  phoneNumber: Yup.string().trim().required('Gerekli Alan'),
  city: Yup.string().trim().required('Gerekli Alan'),
  district: Yup.string().trim().required('Gerekli Alan'),
  postalCode: Yup.string().trim().required('Gerekli Alan'),
  addressDetail: Yup.string().trim().required('Gerekli Alan'),
  identityNumber: Yup.string().trim().required('Gerekli Alan'),
});

export default addNewAddresSchema;
