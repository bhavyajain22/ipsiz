import {ICategoryItem} from '../../types/ICategory.type';
import {
  CATEGORY_SUCCESS,
  CATEGORY_FAILED,
  CATEGORY_LOADING,
} from '../types/category-types';

export type categoryReducerState = {
  categoriesLoading: boolean;
  categories: ICategoryItem[];
};

const initialState: categoryReducerState = {
  categoriesLoading: false,
  categories: [],
};

const CategoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CATEGORY_LOADING:
      return {...state, categoriesLoading: true};
    case CATEGORY_SUCCESS:
      return {...state, categoriesLoading: false, categories: action.payload};
    case CATEGORY_FAILED:
      return {...state, categoriesLoading: false};
    default:
      return state;
  }
};

export default CategoryReducer;
