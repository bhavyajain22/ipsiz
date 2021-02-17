import {IBaseResponse} from '../../types/response-types';
import {IGetSpecialForAcrobats} from '../../types/response-types/profile-types/special-for-acrobats';
import axiosInstance from '../axios-instance';

export const getSpecialForAcrobatsService = () => {
  return axiosInstance.get<IBaseResponse<IGetSpecialForAcrobats>>(
    'special-for-acrobats/fetch',
  );
};
