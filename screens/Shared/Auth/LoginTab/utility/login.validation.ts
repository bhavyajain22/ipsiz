import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Geçerli bir e-posta adresi girmelisiniz.')
    .required('E-posta adresinizi girmelisiniz.'),
  password: Yup.string().trim().required('Şifrenizi girmelisiniz.'),
});

export default loginSchema;
