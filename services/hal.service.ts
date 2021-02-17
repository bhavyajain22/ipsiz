import axios, {Canceler} from 'axios';
import {IBaseResponse} from '../types/response-types';
import {
  IGetHalSliders,
  IGetHalPopularProducts,
  IGetHalRecentStores,
  IGetHalRecentProducts,
  IGetHalCategoryShowcases,
  IGetHalHTMLContents,
  IHalSlider,
} from '../types/response-types/hal.types';
import axiosInstance from './axios-instance';
// CANCEL TOKENS
export let halSlidersCancelToken: Canceler;
export let halMidSlidersCancelToken: Canceler;
export let halWideBannerCancelToken: Canceler;
export let halPopularProductsCancelToken: Canceler;
export let halRecentStoresCancelToken: Canceler;
export let halRecentProductsCancelToken: Canceler;
export let halCategoryShowcasesCancelToken: Canceler;
export let halHtmlContentsCancelToken: Canceler;

export const getHalSliders = () => {
  return axiosInstance.get<IBaseResponse<IGetHalSliders>>('b2b/slider/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      halSlidersCancelToken = c;
    }),
  });
};

export const getHalMidSliders = () => {
  return axiosInstance.get<IBaseResponse<IGetHalSliders>>(
    'b2b/mid-slider/fetch',
    {
      cancelToken: new axios.CancelToken(function (c) {
        halMidSlidersCancelToken = c;
      }),
    },
  );
};

export const getHalWideBanner = () =>
  axiosInstance.get<IBaseResponse<IHalSlider>>('b2b/wide-banner/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      halWideBannerCancelToken = c;
    }),
  });

export const getHalPopularProducts = () =>
  axiosInstance.get<IBaseResponse<IGetHalPopularProducts>>(
    'b2b/featured-products/fetch',
    {
      cancelToken: new axios.CancelToken(function (c) {
        halPopularProductsCancelToken = c;
      }),
    },
  );

export const getHalRecentStores = () =>
  axiosInstance.get<IBaseResponse<IGetHalRecentStores>>(
    'b2b/recently-stores/fetch',
    {
      cancelToken: new axios.CancelToken(function (c) {
        halRecentStoresCancelToken = c;
      }),
    },
  );

export const getHalRecentProducts = () =>
  axiosInstance.get<IBaseResponse<IGetHalRecentProducts>>(
    'b2b/recently-added-products/fetch',
    {
      cancelToken: new axios.CancelToken(function (c) {
        halRecentProductsCancelToken = c;
      }),
    },
  );

export const getHalCategoryShowcases = () =>
  axiosInstance.get<IBaseResponse<IGetHalCategoryShowcases>>(
    'b2b/category-showcase/fetch',
    {
      cancelToken: new axios.CancelToken(function (c) {
        halCategoryShowcasesCancelToken = c;
      }),
    },
  );

export const getHalHTMLContents = () =>
  axiosInstance.get<IBaseResponse<IGetHalHTMLContents>>(
    'b2b/html-contents/fetch',
    {
      cancelToken: new axios.CancelToken(function (c) {
        halHtmlContentsCancelToken = c;
      }),
    },
  );
