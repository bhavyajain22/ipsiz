import * as Yup from 'yup';

const setAlarmValidation = Yup.object().shape({
  alarmDuration: Yup.string().required('Gerekli Alan'),
  expectedPrice: Yup.string().required('Gerekli Alan'),
});

export default setAlarmValidation;
