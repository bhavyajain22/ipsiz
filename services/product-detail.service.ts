import {IProductDetailed} from '../types/IProductDetailed.type';
import {
  IHalProduct,
  IPazarProduct,
  IProductRegular,
} from '../types/IProductRegular.type';
import axiosInstance from './axios-instance';

export const getProductDetails = (id: string) => {
  return axiosInstance.get<{result: IProductDetailed}>(`product/fetch/${id}`);
};

export const getSimilarProducts = (id: string) =>
  axiosInstance.get<IProductRegular[] | IHalProduct[] | IPazarProduct[]>(
    `product/related-products/${id}`,
  );

export const getStoresOtherProducts = (id: string) =>
  axiosInstance.get<IProductRegular[] | IHalProduct[] | IPazarProduct[]>(
    `product/store-products/${id}`,
  );

export const getRefundmentInfo = (id: string) =>
  axiosInstance.get<string>(`product/render-contract/${id}`);

export const askQuestionAboutProduct = (
  product_id: string,
  title: string,
  message: string,
  subject: string,
) =>
  axiosInstance.post<any>('product-question', {
    product_id,
    title,
    message,
    subject,
  });

export const sendMessageToStore = (id: string, message: string) =>
  axiosInstance.post('send-message', {
    id,
    message,
  });
