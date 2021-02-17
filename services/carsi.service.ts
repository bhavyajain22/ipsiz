import {IBaseResponse} from '../types/response-types';
import axios, {Canceler} from 'axios';
import {
  IGetBanners,
  IGetBestSellerCategories,
  IGetBrandCategories,
  IGetMostlyViewedProducts,
  IGetPopularProducts,
  IGetPromoProducts,
  IGetSliders,
  IGetUnbelievableDiscountedProducts,
  IGetWeeklyPromos,
} from '../types/response-types/carsi.types';
import axiosInstance from './axios-instance';
// CANCEL TOKENS
export let carsiSlidersCancelToken: Canceler;
export let carsiBannersCancelToken: Canceler;
export let carsiPopularProductsCancelToken: Canceler;
export let carsiWeeklyPromosCancelToken: Canceler;
export let carsiMostlyViewedProductsCancelToken: Canceler;
export let carsiPromoProductsCancelToken: Canceler;
export let carsiUnbelievableProductsCancelToken: Canceler;
export let carsiBestSellerCategoriesCancelToken: Canceler;
export let carsiBrandCategoriesCancelToken: Canceler;

export const getCarsiSliders = () => {
  return axiosInstance.get<IBaseResponse<IGetSliders>>('slider/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      carsiSlidersCancelToken = c;
    }),
  });
};

export const getCarsiBanners = () => {
  return axiosInstance.get<IBaseResponse<IGetBanners>>('top-banners/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      carsiBannersCancelToken = c;
    }),
  });
};

export const getCarsiMidBanners = () =>
  axiosInstance.get<IBaseResponse<IGetBanners>>('mid-banners/fetch');

export const getPopularProducts = () =>
  axiosInstance.get<IBaseResponse<IGetPopularProducts>>(
    'popular-products/fetch?page=1',
    {
      cancelToken: new axios.CancelToken(function (c) {
        carsiPopularProductsCancelToken = c;
      }),
    },
  );

export const getWeeklyPromos = () =>
  axiosInstance.get<IBaseResponse<IGetWeeklyPromos>>(
    'weekly-promo/fetch?page=1',
    {
      cancelToken: new axios.CancelToken(function (c) {
        carsiWeeklyPromosCancelToken = c;
      }),
    },
  );

export const getMostViewedProducts = () =>
  axiosInstance.get<IBaseResponse<IGetMostlyViewedProducts>>(
    'most-viewed/fetch?page=1',
    {
      cancelToken: new axios.CancelToken(function (c) {
        carsiMostlyViewedProductsCancelToken = c;
      }),
    },
  );

export const getPromoProducts = () =>
  axiosInstance.get<IBaseResponse<IGetPromoProducts>>('promo-product/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      carsiPromoProductsCancelToken = c;
    }),
  });

export const getUnbelievableDiscountedProducts = () =>
  axiosInstance.get<IBaseResponse<IGetUnbelievableDiscountedProducts>>(
    'ladder-proof-promo/fetch?page=1',
    {
      cancelToken: new axios.CancelToken(function (c) {
        carsiUnbelievableProductsCancelToken = c;
      }),
    },
  );

export const getBestSellerCategories = () =>
  axiosInstance.get<IBaseResponse<IGetBestSellerCategories>>(
    'best-seller/fetch',
    {
      cancelToken: new axios.CancelToken(function (c) {
        carsiBestSellerCategoriesCancelToken = c;
      }),
    },
  );

export const getBrandCategories = () =>
  axiosInstance.get<IBaseResponse<IGetBrandCategories>>('brands/fetch', {
    cancelToken: new axios.CancelToken(function (c) {
      carsiBrandCategoriesCancelToken = c;
    }),
  });
