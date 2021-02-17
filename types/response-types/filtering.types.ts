import {ICategoryItem} from '../ICategory.type';
import {ISingleBrand, ISingleStore} from '../IFiltering.type';

export type IGetFilteringCarsiVariants = {
  brands: ISingleBrand[];
  stores: ISingleStore[];
  currentCategory: ICategoryItem[];
};
