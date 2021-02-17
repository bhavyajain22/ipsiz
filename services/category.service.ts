import axiosInstance from './axios-instance';

export const getAllCategory = () => {
  return axiosInstance.get('categories/fetch');
};
