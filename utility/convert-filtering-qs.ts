import {IFilteringRequest} from '../types/request-types/IFilteringRequest.type';
import queryString from 'query-string';
import {IFilteringPreprocessed} from '../types/IFiltering.type';

const priceRangeToArrayConverter = (priceRange: {
  startingPrice: string | null;
  endingPrice: string | null;
}) => {
  if (priceRange.startingPrice && priceRange.endingPrice) {
    return [+priceRange.startingPrice, +priceRange.endingPrice];
  } else if (priceRange.startingPrice && !priceRange.endingPrice) {
    return [+priceRange.startingPrice];
  } else if (!priceRange.startingPrice && priceRange.endingPrice) {
    return [0, +priceRange.endingPrice];
  } else {
    return [];
  }
};

const processFilteringBeforeQs: (
  filteringJson: IFilteringPreprocessed,
) => IFilteringRequest = (filteringJson) => {
  return {
    target: filteringJson.target,
    id: filteringJson.id,
    branch: filteringJson.branch,
    page: filteringJson.page,
    ...(filteringJson.search_key && {search_key: filteringJson.search_key}),
    ...(filteringJson.store &&
      filteringJson.store.length && {store: filteringJson.store}),
    ...(filteringJson.brand &&
      filteringJson.brand.length && {brand: filteringJson.brand}),
    ...(filteringJson.score &&
      filteringJson.score.length && {
        score: filteringJson.score.map((item) => +item),
      }),
    ...(filteringJson.priceRange &&
      priceRangeToArrayConverter(filteringJson.priceRange).length && {
        price: priceRangeToArrayConverter(filteringJson.priceRange),
      }),
    ...(filteringJson.sorting !== null && {sort: filteringJson.sorting}),
  };
};

export const convertFilteringJsonToQueryString = (
  filteringJson: IFilteringPreprocessed,
) => {
  const processed = processFilteringBeforeQs(filteringJson);
  return queryString.stringify(processed, {
    arrayFormat: 'comma',
    skipNull: true,
  });
};
