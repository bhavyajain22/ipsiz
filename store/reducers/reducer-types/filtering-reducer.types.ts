import {ICategoryItem} from '../../../types/ICategory.type';
import {ISingleBrand, ISingleStore} from '../../../types/IFiltering.type';
import {
  IHalProduct,
  IPazarProduct,
  IProductRegular,
} from '../../../types/IProductRegular.type';

export type IFilteringStatus = {
  category: ICategoryItem | null;
  brands: ISingleBrand[];
  ratings: string[];
  stores: ISingleStore[];
  priceRange: {startingPrice: string | null; endingPrice: string | null};
  sorting: '0' | '1' | '2' | '3' | '4' | '5' | '6' | null;
  globalSearch: string | null;
};

export type IFilteringReducerState = {
  searchTarget: 'category' | 'search';
  filteredItemsLoading: boolean;
  variantsLoading: boolean;
  currentPage: number;
  totalPageCount: number | null;
  filteredItems: IProductRegular[] | IHalProduct[] | IPazarProduct[];
  filteringStatus: IFilteringStatus;
  availableBrands: ISingleBrand[];
  availableStores: ISingleStore[];
};
