import * as Yup from 'yup';

const askAboutProductValidation = Yup.object().shape({
  title: Yup.string().trim().required('Gerekli Alan'),
  topic: Yup.string().required('Gerekli Alan'),
  message: Yup.string().trim().required('Gerekli Alan'),
});

export default askAboutProductValidation;
