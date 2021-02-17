import * as Yup from 'yup';

const askQuestionValidation = Yup.object().shape({
  message: Yup.string().trim().required('Gerekli Alan'),
});

export default askQuestionValidation;
