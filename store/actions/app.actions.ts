import {CONVERT_APP_TYPE} from '../types/app.types';

export const convertAppType = (payload: 'carsi' | 'pazar' | 'hal') => ({
  type: CONVERT_APP_TYPE,
  payload,
});
