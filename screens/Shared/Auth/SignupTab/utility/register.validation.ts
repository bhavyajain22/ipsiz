import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  firstName: Yup.string().trim().required('Gerekli Alan'),
  lastName: Yup.string().trim().required('Gerekli Alan'),
  email: Yup.string().email('Geçersiz Email!').required('Gerekli Alan'),
  gsm: Yup.string().required('Gerekli Alan'),
  password: Yup.string().trim().required('Gerekli Alan'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), undefined],
    'Şifreler Uyuşmalıdır',
  ),
  bulletinPermission: Yup.bool(),
});

export default registerSchema;
