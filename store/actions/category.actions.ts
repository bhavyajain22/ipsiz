import {ICategoryItem} from '../../types/ICategory.type';
import {
  CATEGORY_SUCCESS,
  CATEGORY_LOADING,
  CATEGORY_FAILED,
} from '../types/category-types';

export const startCategoriesLoading = () => ({type: CATEGORY_LOADING});
export const successCategoriesLoading = (categories: ICategoryItem[]) => ({
  type: CATEGORY_SUCCESS,
  payload: categories,
});
export const failedCategoriesLoading = () => ({type: CATEGORY_FAILED});
