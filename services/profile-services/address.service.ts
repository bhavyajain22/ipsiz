import axiosInstance from '../axios-instance';
import {IBaseResponse} from '../../types/response-types';
import {
  IAddress,
  ICity,
  ICounty,
} from '../../types/response-types/profile-types/address.types';

export const getInvoiceAddresses = () =>
  axiosInstance.get<IBaseResponse<IAddress[]>>('address/invoice');

export const getDeliveryAddresses = () =>
  axiosInstance.get<IBaseResponse<IAddress[]>>('address/delivery');

export const createNewAddress = (
  addressName: string,
  city: string,
  county: string,
  addressType: string,
  addressText: string,
  postalCode: string,
) =>
  axiosInstance.put<{status: boolean}>('address', {
    rawAddress: {
      addressName,
      city,
      county,
      addressType,
      addressText,
      postalCode,
    },
  });

export const updateAddress = (
  id: string,
  addressName: string,
  city: string,
  county: string,
  addressType: string,
  addressText: string,
  postalCode: string,
) =>
  axiosInstance.put<{status: boolean}>(`address/id/${id}`, {
    addressName,
    city,
    county,
    addressType,
    addressText,
    postalCode,
  });

export const deleteAddress = (id: string) =>
  axiosInstance.delete<{status: boolean}>(`address/id/${id}`);

export const getCities = () =>
  axiosInstance.get<IBaseResponse<ICity[]>>('cities');

export const getCounties = (cityId: string) =>
  axiosInstance.get<IBaseResponse<ICounty[]>>(`city-detail/${cityId}`);
