import * as Yup from 'yup';

const newCommentValidation = Yup.object().shape({
  starCount: Yup.number().required('Gerekli Alan'),
  message: Yup.string().required('Gerekli Alan'),
});

export default newCommentValidation;
