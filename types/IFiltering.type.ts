export type ISingleBrand = {
  id: string;
  name: string;
  slug: string;
  total: number;
};

export type ISingleStore = {
  name: string;
  slug: string;
  total: number;
  selected: boolean;
};

export type IFilteringPreprocessed = {
  target: 'category' | 'brand' | 'search';
  id: string | null | undefined; // category id when target is category.
  branch: 'b2c' | 'b2b' | 'c2c';
  page: number;
  search_key: string | null;
  store: string[]; // [store1,store2,store3]  (magaza slug)
  brand: string[]; // [brand1,brand2,brand3] (brand slug)
  score: string[]; // [3,2,5] (ratings)
  priceRange: {startingPrice: string | null; endingPrice: string | null};
  sorting: '0' | '1' | '2' | '3' | '4' | '5' | '6' | null;
};
