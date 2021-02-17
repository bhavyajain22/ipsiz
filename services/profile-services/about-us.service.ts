import {IBaseResponse} from '../../types/response-types';
import {IGetAboutUs} from '../../types/response-types/profile-types/about-us.types';
import axiosInstance from '../axios-instance';

export const getAboutUsService = () => {
  return axiosInstance.get<IBaseResponse<IGetAboutUs>>('who-us/fetch');
};
