import {Reducer} from 'redux';
import {CONVERT_APP_TYPE} from '../types/app.types';
import {
  CHANGE_AVAILABLE_VARIANTS,
  CHANGE_CATEGORY,
  CHANGE_CATEGORY_ONLY,
  CHANGE_FILTERING_BRANDS,
  CHANGE_FILTERING_STATUS,
  CHANGE_FILTERING_STORES,
  CHANGE_GLOBAL_SEARCH,
  CHANGE_PRICE_RANGE,
  CHANGE_SCORES,
  CHANGE_SORTING,
  CHANGE_TARGET,
  CLEAR_ALL_FILTERING,
  CLEAR_CATEGORY,
  EMPTY_FILTERED_ITEMS,
  START_FILTERING,
  START_VARIANTS_LOADING,
  SUCCESS_FILTERING,
  SUCCESS_FILTERING_SCRATCH,
} from '../types/filtering.types';
import {IFilteringReducerState} from './reducer-types/filtering-reducer.types';

const initialState: IFilteringReducerState = {
  searchTarget: 'category',
  filteredItemsLoading: false,
  variantsLoading: false,
  currentPage: 1,
  totalPageCount: null,
  filteredItems: [],
  filteringStatus: {
    category: null,
    brands: [],
    ratings: [],
    stores: [],
    priceRange: {startingPrice: null, endingPrice: null},
    sorting: null,
    globalSearch: null,
  },
  availableBrands: [],
  availableStores: [],
};

const FilteringReducer: Reducer<IFilteringReducerState> = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case CONVERT_APP_TYPE:
      return {
        ...state,
        searchTarget: state.searchTarget,
        filteredItemsLoading: false,
        variantsLoading: false,
        currentPage: 1,
        totalPageCount: null,
        filteredItems: [],
        filteringStatus: {
          category: null,
          brands: [],
          ratings: [],
          stores: [],
          priceRange: {startingPrice: null, endingPrice: null},
          sorting: null,
          globalSearch: null,
        },
        availableBrands: [],
        availableStores: [],
      };
    case CLEAR_ALL_FILTERING:
      return {
        ...state,
        searchTarget: state.searchTarget,
        filteredItemsLoading: false,
        variantsLoading: false,
        currentPage: 1,
        totalPageCount: null,
        filteredItems: [],
        filteringStatus: {
          category: null,
          brands: [],
          ratings: [],
          stores: [],
          priceRange: {startingPrice: null, endingPrice: null},
          sorting: null,
          globalSearch: null,
        },
        availableBrands: [],
        availableStores: [],
      };
    case START_FILTERING:
      return {
        ...state,
        filteredItemsLoading: true,
      };
    case SUCCESS_FILTERING_SCRATCH:
      return {
        ...state,
        filteredItemsLoading: false,
        filteredItems: action.payload.data,
        totalPageCount: action.payload.totalPageCount,
        currentPage: action.payload.currentPage,
      };
    case SUCCESS_FILTERING:
      return {
        ...state,
        filteredItemsLoading: false,
        filteredItems: [...state.filteredItems, ...action.payload.data],
        totalPageCount: action.payload.totalPageCount,
        currentPage: action.payload.currentPage,
      };
    case EMPTY_FILTERED_ITEMS:
      return {
        ...state,
        filteredItems: [],
        currentPage: 1,
        totalPageCount: null,
      };
    case CHANGE_CATEGORY:
      return {
        ...state,
        searchTarget: 'category',
        currentPage: 1,
        totalPageCount: null,
        filteringStatus: {
          brands: [],
          ratings: [],
          stores: [],
          priceRange: {startingPrice: null, endingPrice: null},
          sorting: null,
          globalSearch: null,
          category: action.payload,
        },
      };
    case CHANGE_CATEGORY_ONLY:
      return {
        ...state,
        filteringStatus: {
          ...state.filteringStatus,
          category: action.payload,
        },
      };
    case CLEAR_CATEGORY:
      return {
        ...state,
        filteredItems: [],
        filteringStatus: {
          ...state.filteringStatus,
          category: null,
        },
      };
    case CHANGE_FILTERING_STATUS:
      return {...state, filteringStatus: action.payload};
    case CHANGE_FILTERING_BRANDS:
      return {
        ...state,
        filteringStatus: {...state.filteringStatus, brands: action.payload},
      };
    case CHANGE_FILTERING_STORES:
      return {
        ...state,
        filteringStatus: {...state.filteringStatus, stores: action.payload},
      };
    case START_VARIANTS_LOADING:
      return {
        ...state,
        variantsLoading: true,
      };
    case CHANGE_AVAILABLE_VARIANTS:
      return {
        ...state,
        variantsLoading: false,
        availableBrands: action.payload.brands,
        availableStores: action.payload.stores,
        filteringStatus: {
          ...state.filteringStatus,
          brands: [],
          ratings: [],
          stores: [],
          priceRange: {startingPrice: null, endingPrice: null},
          sorting: null,
          globalSearch: null,
        },
      };
    case CHANGE_TARGET:
      return {
        ...state,
        searchTarget: action.payload,
      };
    case CHANGE_GLOBAL_SEARCH:
      return {
        ...state,
        filteringStatus: {
          ...state.filteringStatus,
          globalSearch: action.payload,
        },
      };
    case CHANGE_PRICE_RANGE:
      return {
        ...state,
        filteringStatus: {
          ...state.filteringStatus,
          priceRange: {
            startingPrice: action.payload.startingPrice,
            endingPrice: action.payload.endingPrice,
          },
        },
      };
    case CHANGE_SCORES:
      return {
        ...state,
        filteringStatus: {
          ...state.filteringStatus,
          ratings: action.payload,
        },
      };
    case CHANGE_SORTING:
      console.log(action.payload);
      return {
        ...state,
        filteringStatus: {
          ...state.filteringStatus,
          sorting: action.payload,
        },
      };
    default:
      return state;
  }
};

export default FilteringReducer;
