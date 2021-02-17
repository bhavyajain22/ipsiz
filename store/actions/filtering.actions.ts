import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {
  getFilteringCarsiProductsService,
  getFilteringCarsiVariantsService,
} from '../../services/filtering.service';
import {ICategoryItem} from '../../types/ICategory.type';
import {
  IFilteringPreprocessed,
  ISingleBrand,
  ISingleStore,
} from '../../types/IFiltering.type';
import {convertAppStateToAbbreviation} from '../../utility/convert-app-state-to-abbreviation';
import {RootState} from '../reducers';
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
  CLEAR_CATEGORY,
  EMPTY_FILTERED_ITEMS,
  START_FILTERING,
  START_VARIANTS_LOADING,
  SUCCESS_FILTERING,
  SUCCESS_FILTERING_SCRATCH,
} from '../types/filtering.types';

type IFilteringStatus = {
  category: string | null;
  brands: string[];
  ratings: string[];
  stores: string[];
  priceRange: {startingPrice: string | null; endingPrice: string | null};
  sorting: string | null;
};

export const getCarsiAvailableVariantsWithCategoryAction = (
  category: ICategoryItem,
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch: any, getState) => {
    dispatch({type: START_VARIANTS_LOADING});
    const selectedAppState = getState().AppReducer.selectedAppState;
    const {
      data: {brands, stores},
    } = await getFilteringCarsiVariantsService({
      target: 'category',
      id: category.backendName,
      branch: convertAppStateToAbbreviation(selectedAppState),
      page: 1,
      search_key: getState().FilteringReducer.filteringStatus.globalSearch,
      store: getState().FilteringReducer.filteringStatus.stores.map(
        (item) => item.slug,
      ),
      brand: getState().FilteringReducer.filteringStatus.brands.map(
        (item) => item.slug,
      ),
      score: getState().FilteringReducer.filteringStatus.ratings,
      priceRange: getState().FilteringReducer.filteringStatus.priceRange,
      sorting: getState().FilteringReducer.filteringStatus.sorting,
    });
    dispatch({type: CHANGE_AVAILABLE_VARIANTS, payload: {brands, stores}});
  };
};

export const getCarsiAvailableVariantsWithSearchTextAction = (
  searchText: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState,
) => {
  dispatch({type: START_VARIANTS_LOADING});
  const selectedAppState = getState().AppReducer.selectedAppState;
  const {
    data: {brands, stores, currentCategory},
  } = await getFilteringCarsiVariantsService({
    target: 'search',
    id: null,
    branch: convertAppStateToAbbreviation(selectedAppState),
    page: 1,
    search_key: searchText,
    store: getState().FilteringReducer.filteringStatus.stores.map(
      (item) => item.slug,
    ),
    brand: getState().FilteringReducer.filteringStatus.brands.map(
      (item) => item.slug,
    ),
    score: getState().FilteringReducer.filteringStatus.ratings,
    priceRange: getState().FilteringReducer.filteringStatus.priceRange,
    sorting: getState().FilteringReducer.filteringStatus.sorting,
  });
  dispatch({
    type: CHANGE_CATEGORY_ONLY,
    payload: currentCategory ? currentCategory : null,
  });
  dispatch({type: CHANGE_TARGET, payload: 'search'});
  dispatch({type: CHANGE_AVAILABLE_VARIANTS, payload: {brands, stores}});
  dispatch({type: CHANGE_GLOBAL_SEARCH, payload: searchText});
  dispatch(
    getCarsiAvailableProductsFromScratchAction({
      target: 'search',
      id: null,
      branch: convertAppStateToAbbreviation(selectedAppState),
      page: 1,
      search_key: searchText,
      store: getState().FilteringReducer.filteringStatus.stores.map(
        (item) => item.slug,
      ),
      brand: getState().FilteringReducer.filteringStatus.brands.map(
        (item) => item.slug,
      ),
      score: getState().FilteringReducer.filteringStatus.ratings,
      priceRange: getState().FilteringReducer.filteringStatus.priceRange,
      sorting: getState().FilteringReducer.filteringStatus.sorting,
    }),
  );
};

export const getCarsiAvailableProductsFromScratchAction = (
  filteringPreprocessed: IFilteringPreprocessed,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
) => {
  dispatch({type: START_FILTERING});
  const {
    data: {result: data, pageCount: totalPageCount},
  } = await getFilteringCarsiProductsService(filteringPreprocessed);
  return dispatch({
    type: SUCCESS_FILTERING_SCRATCH,
    payload: {data, totalPageCount, currentPage: filteringPreprocessed.page},
  });
};

export const getCarsiAvailableProductsAction = (
  filteringPreprocessed: IFilteringPreprocessed,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
) => {
  dispatch({type: START_FILTERING});
  const {
    data: {result: data, pageCount: totalPageCount},
  } = await getFilteringCarsiProductsService(filteringPreprocessed);
  return dispatch({
    type: SUCCESS_FILTERING,
    payload: {data, totalPageCount, currentPage: filteringPreprocessed.page},
  });
};

export const changeCategoryAction = (
  category: ICategoryItem,
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (dispatch, getState) => {
    const selectedAppState = getState().AppReducer.selectedAppState;
    dispatch(getCarsiAvailableVariantsWithCategoryAction(category));
    // TODO: APPLICATION STATE CHECK WILL COME HERE.
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: 'category',
        id: category.backendName,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: null,
        store: [],
        brand: [],
        score: [],
        priceRange: {startingPrice: null, endingPrice: null},
        sorting: null,
      }),
    );
    return dispatch({type: CHANGE_CATEGORY, payload: category});
  };
};
export const clearCategoryAction = () => ({type: CLEAR_CATEGORY});

export const changeFilteringStatusAction = (
  filteredState: IFilteringStatus,
) => ({type: CHANGE_FILTERING_STATUS, payload: filteredState});

export const changeBrandsAction = (
  brand: ISingleBrand,
  toAdd: boolean,
) => async (dispatch: any, getState: () => RootState) => {
  const {
    AppReducer: {selectedAppState},
    FilteringReducer: {
      searchTarget,
      filteringStatus: {
        brands,
        category,
        globalSearch,
        stores,
        ratings,
        priceRange,
        sorting,
      },
    },
  } = getState();
  if (toAdd) {
    dispatch({type: CHANGE_FILTERING_BRANDS, payload: [...brands, brand]});
    // TODO: APPLICATION STATE CHECK WILL COME HERE.
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: searchTarget,
        id: searchTarget === 'category' ? category?.backendName : null,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: searchTarget === 'search' ? globalSearch : null,

        store: stores.map((i) => i.slug),
        brand: [...brands, brand].map((i) => i.slug),
        score: ratings,
        priceRange: priceRange,
        sorting,
      }),
    );
  }
  if (!toAdd) {
    dispatch({
      type: CHANGE_FILTERING_BRANDS,
      payload: brands.filter((item) => item.slug !== brand.slug),
    });
    // TODO: APPLICATION STATE CHECK WILL COME HERE.
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: searchTarget,
        id: searchTarget === 'category' ? category?.backendName : null,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: searchTarget === 'search' ? globalSearch : null,
        store: stores.map((item) => item.slug),
        brand: brands
          .filter((item) => item.slug !== brand.slug)
          .map((i) => i.slug),
        score: ratings,
        priceRange: priceRange,
        sorting,
      }),
    );
  }
};

export const clearBrandsAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  dispatch({
    type: CHANGE_FILTERING_BRANDS,
    payload: [],
  });

  const {
    AppReducer: {selectedAppState},
    FilteringReducer: {
      searchTarget,
      filteringStatus: {
        category,
        globalSearch,
        stores,
        ratings,
        priceRange,
        sorting,
      },
    },
  } = getState();

  dispatch(
    getCarsiAvailableProductsFromScratchAction({
      target: searchTarget,
      id: searchTarget === 'category' ? category?.backendName : null,
      branch: convertAppStateToAbbreviation(selectedAppState),
      page: 1,
      search_key: searchTarget === 'search' ? globalSearch : null,
      store: stores.map((item) => item.slug),
      brand: [],
      score: ratings,
      priceRange: priceRange,
      sorting,
    }),
  );
};

export const changeStoresAction = (
  store: ISingleStore,
  toAdd: boolean,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState: () => RootState,
) => {
  const {
    AppReducer: {selectedAppState},
    FilteringReducer: {
      filteringStatus: {
        stores,
        category,
        globalSearch,
        brands,
        ratings,
        priceRange,
        sorting,
      },
      searchTarget,
    },
  } = getState();
  if (toAdd) {
    dispatch({type: CHANGE_FILTERING_STORES, payload: [...stores, store]});
    // TODO: APPLICATION STATE CHECK WILL COME HERE.
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: searchTarget,
        id: searchTarget === 'category' ? category?.backendName : null,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: searchTarget === 'search' ? globalSearch : null,
        store: [...stores, store].map((i) => i.slug),
        brand: brands.map((i) => i.slug),
        score: ratings,
        priceRange: priceRange,
        sorting,
      }),
    );
  }
  if (!toAdd) {
    dispatch({
      type: CHANGE_FILTERING_STORES,
      payload: stores.filter((item) => item.slug !== store.slug),
    });
    // TODO: APPLICATION STATE CHECK WILL COME HERE.
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: searchTarget,
        id: searchTarget === 'category' ? category?.backendName : null,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: searchTarget === 'search' ? globalSearch : null,
        store: stores
          .filter((item) => item.slug !== store.slug)
          .map((i) => i.slug),
        brand: brands.map((i) => i.slug),
        score: ratings,
        priceRange,
        sorting,
      }),
    );
  }
};

export const clearStoresAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  const {
    AppReducer: {selectedAppState},
    FilteringReducer: {
      filteringStatus: {
        category,
        globalSearch,
        brands,
        ratings,
        priceRange,
        sorting,
      },
      searchTarget,
    },
  } = getState();
  dispatch({
    type: CHANGE_FILTERING_STORES,
    payload: [],
  });

  dispatch(
    getCarsiAvailableProductsFromScratchAction({
      target: searchTarget,
      id: searchTarget === 'category' ? category?.backendName : null,
      branch: convertAppStateToAbbreviation(selectedAppState),
      page: 1,
      search_key: searchTarget === 'search' ? globalSearch : null,
      store: [],
      brand: brands.map((i) => i.slug),
      score: ratings,
      priceRange,
      sorting,
    }),
  );
};

export const changeScoresAction = (score: string, toAdd: boolean) => async (
  dispatch: any,
  getState: () => RootState,
) => {
  const {
    AppReducer: {selectedAppState},
    FilteringReducer: {
      searchTarget,
      filteringStatus: {
        brands,
        category,
        globalSearch,
        stores,
        ratings,
        priceRange,
        sorting,
      },
    },
  } = getState();
  if (toAdd) {
    dispatch({type: CHANGE_SCORES, payload: [...ratings, score]});
    // TODO: APPLICATION STATE CHECK WILL COME HERE.
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: searchTarget,
        id: searchTarget === 'category' ? category?.backendName : null,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: searchTarget === 'search' ? globalSearch : null,

        store: stores.map((i) => i.slug),
        brand: brands.map((i) => i.slug),
        score: [...ratings, score],
        priceRange: priceRange,
        sorting,
      }),
    );
  }
  if (!toAdd) {
    dispatch({
      type: CHANGE_SCORES,
      payload: ratings.filter((i) => i !== score),
    });
    // TODO: APPLICATION STATE CHECK WILL COME HERE.
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: searchTarget,
        id: searchTarget === 'category' ? category?.backendName : null,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: searchTarget === 'search' ? globalSearch : null,
        store: stores.map((item) => item.slug),
        brand: brands.map((i) => i.slug),
        score: ratings.filter((i) => i !== score),
        priceRange: priceRange,
        sorting,
      }),
    );
  }
};

export const clearScoresAction = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async (dispatch, getState) => {
  dispatch({
    type: CHANGE_SCORES,
    payload: [],
  });

  const {
    AppReducer: {selectedAppState},
    FilteringReducer: {
      searchTarget,
      filteringStatus: {
        category,
        globalSearch,
        stores,
        brands,
        priceRange,
        sorting,
      },
    },
  } = getState();

  dispatch(
    getCarsiAvailableProductsFromScratchAction({
      target: searchTarget,
      id: searchTarget === 'category' ? category?.backendName : null,
      branch: convertAppStateToAbbreviation(selectedAppState),
      page: 1,
      search_key: searchTarget === 'search' ? globalSearch : null,
      store: stores.map((item) => item.slug),
      brand: brands.map((item) => item.slug),
      score: [],
      priceRange: priceRange,
      sorting,
    }),
  );
};

export const changePriceRangeAction = (
  startingPrice: string | null,
  endingPrice: string | null,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState,
) => {
  const {
    AppReducer: {selectedAppState},
    FilteringReducer: {
      filteringStatus: {category, globalSearch, brands, ratings, sorting},
      searchTarget,
    },
  } = getState();
  dispatch({
    type: CHANGE_PRICE_RANGE,
    payload: {startingPrice, endingPrice},
  });
  dispatch(
    getCarsiAvailableProductsFromScratchAction({
      target: searchTarget,
      id: searchTarget === 'category' ? category?.backendName : null,
      branch: convertAppStateToAbbreviation(selectedAppState),
      page: 1,
      search_key: searchTarget === 'search' ? globalSearch : null,
      store: [],
      brand: brands.map((i) => i.slug),
      score: ratings,
      priceRange: {startingPrice, endingPrice},
      sorting,
    }),
  );
};

export const changeGlobalFilteringAction = (
  globalSearch: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState,
) => {
  const {
    AppReducer: {selectedAppState},
  } = getState();
  // TODO: APPLICATION STATE CHECK WILL COME HERE.
  if (globalSearch !== '') {
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: 'search',
        id: null,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: globalSearch,
        store: [],
        brand: [],
        score: [],
        priceRange: {startingPrice: null, endingPrice: null},
        sorting: null,
      }),
    );
    // MODIFY ALL STATE AND SETTING INCOMING CATEGORY, BRANDS and STORES WILL COME HERE.
    dispatch(getCarsiAvailableVariantsWithSearchTextAction(globalSearch));
  } else {
    dispatch(emptyFilteredItemsAction());
  }
};

export const changeSortingAction = (
  sortingVal: '0' | '1' | '2' | '3' | '4' | '5' | '6',
  toAdd: boolean,
): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
  getState,
) => {
  const {
    AppReducer: {selectedAppState},
    FilteringReducer: {
      filteringStatus: {category, globalSearch, brands, ratings, priceRange},
      searchTarget,
    },
  } = getState();
  if (toAdd) {
    dispatch({type: CHANGE_SORTING, payload: sortingVal});
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: searchTarget,
        id: searchTarget === 'category' ? category?.backendName : null,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: searchTarget === 'search' ? globalSearch : null,
        store: [],
        brand: brands.map((i) => i.slug),
        score: ratings,
        priceRange,
        sorting: sortingVal,
      }),
    );
  } else {
    dispatch({type: CHANGE_SORTING, payload: null});
    dispatch(
      getCarsiAvailableProductsFromScratchAction({
        target: searchTarget,
        id: searchTarget === 'category' ? category?.backendName : null,
        branch: convertAppStateToAbbreviation(selectedAppState),
        page: 1,
        search_key: searchTarget === 'search' ? globalSearch : null,
        store: [],
        brand: brands.map((i) => i.slug),
        score: ratings,
        priceRange,
        sorting: null,
      }),
    );
  }
};

export const emptyFilteredItemsAction = () => ({type: EMPTY_FILTERED_ITEMS});
