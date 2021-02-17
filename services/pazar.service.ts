import axios, {Canceler} from 'axios';
import {IPazarProduct} from '../types/IProductRegular.type';
import {IBaseResponse} from '../types/response-types';
import {
  IGetPazarBanners,
  IGetPazarCategoryShowcase,
  IGetPazarMainTabs,
  IGetPazarSliders,
  IPazarWideBanner,
} from '../types/response-types/pazar.types';
import axiosInstance from './axios-instance';
// CANCEL TOKENS
export let pazarSlidersCancelToken: Canceler;
export let pazarBannersCancelToken: Canceler;
export let pazarPopularProductsCancelToken: Canceler;
export let pazarLatestProductsCancelToken: Canceler;
export let pazarLatestAdvertsCancelToken: Canceler;
export let pazarMainTabsCancelToken: Canceler;

export const getPazarSliders = () =>
  axiosInstance.get<IBaseResponse<IGetPazarSliders>>('c2c/slider/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      pazarSlidersCancelToken = c;
    }),
  });

export const getPazarBanners = () =>
  axiosInstance.get<IBaseResponse<IGetPazarBanners>>('c2c/top-banners/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      pazarBannersCancelToken = c;
    }),
  });

export const getPazarWideBanner = () =>
  axiosInstance.get<IBaseResponse<IPazarWideBanner>>(
    'c2c/see-all-products/fetch',
  );

export const getPazarPopularProducts = () =>
  axiosInstance.get<IBaseResponse<IPazarProduct[]>>(
    'c2c/popular-products/fetch',
    {
      cancelToken: new axios.CancelToken(function (c) {
        pazarPopularProductsCancelToken = c;
      }),
    },
  );

export const getPazarLatestProducts = () =>
  axiosInstance.get<IBaseResponse<IPazarProduct[]>>('c2c/last-products/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      pazarLatestProductsCancelToken = c;
    }),
  });

export const getPazarLatestAdverts = () =>
  axiosInstance.get<IBaseResponse<IPazarProduct[]>>('c2c/last-adverts/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      pazarLatestAdvertsCancelToken = c;
    }),
  });

export const getPazarMainTabs = () =>
  axiosInstance.get<IGetPazarMainTabs>('c2c/get-main-tabs/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      pazarMainTabsCancelToken = c;
    }),
  });

export const getPazarCategoryShowcase = () =>
  axiosInstance.get<IBaseResponse<IGetPazarCategoryShowcase>>(
    'c2c/category-showcase/fetch',
  );
