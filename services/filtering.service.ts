import {IFilteringPreprocessed} from '../types/IFiltering.type';
import {IProductRegular} from '../types/IProductRegular.type';
import {IGetFilteringCarsiVariants} from '../types/response-types/filtering.types';
import {convertFilteringJsonToQueryString} from '../utility/convert-filtering-qs';
import axiosInstance from './axios-instance';

export const getFilteringCarsiProductsService = (
  filteringRequest: IFilteringPreprocessed,
) => {
  console.log(convertFilteringJsonToQueryString(filteringRequest));
  return axiosInstance.get<{result: IProductRegular[]; pageCount: number}>(
    `/filter/products?${convertFilteringJsonToQueryString(filteringRequest)}`,
  );
};

export const getFilteringCarsiVariantsService = (
  filteringRequest: IFilteringPreprocessed,
) => {
  return axiosInstance.get<IGetFilteringCarsiVariants>(
    `filter/aggregations?${convertFilteringJsonToQueryString(
      filteringRequest,
    )}`,
  );
};
