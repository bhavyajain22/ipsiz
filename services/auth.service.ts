import axiosInstance from './axios-instance';
import axios from 'axios';
import {API_ENDPOINT} from '../assets/environment';
import {ILoginResponse} from '../types/response-types/auth.types';

export const loginService = (email: string, password: string) =>
  axiosInstance.post<ILoginResponse>('auth/signin', {
    username: email,
    password,
  });

export const continueAsGuestService = () =>
  axiosInstance.post<ILoginResponse>('auth/guest', {
    email: 'deneme@denemeguest.cc',
  });

export const logoutService = () =>
  axiosInstance.post<{status: boolean}>('auth/signout');

export const registerService = (
  firstName: string,
  lastName: string,
  email: string,
  gsm: string,
  password: string,
  bulletinPermission: boolean,
) =>
  axiosInstance.post<ILoginResponse>('auth/signup', {
    firstName,
    lastName,
    email,
    gsm,
    password,
    bulletinPermission,
  });

export const sendSMSService = (token: string) =>
  axios.get<any>(`${API_ENDPOINT}confirmation/gsm/send-gsm-confirmation-code`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

export const confirmSMSService = (token: string, gsmConfirmationCode: string) =>
  axios.put(
    `${API_ENDPOINT}confirmation/gsm/confirm-account-gsm/code`,
    {
      gsmConfirmationCode,
    },
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    },
  );
