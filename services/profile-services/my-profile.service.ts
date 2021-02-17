import {IBaseResponse} from '../../types/response-types';
import {IMyProfile} from '../../types/response-types/profile-types/my-profile.types';
import axiosInstance from '../axios-instance';

export const getMyProfile = () => {
  return axiosInstance.get<IBaseResponse<IMyProfile>>('user-detail/fetch');
};
