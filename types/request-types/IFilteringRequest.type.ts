export type IFilteringRequest = {
  target: 'category' | 'brand' | 'search';
  id: string | null | undefined; // category or brand Id when target is category or brand
  branch: 'b2c' | 'b2b' | 'c2c';
  page: number;
  search_key?: string | null;
  store?: string[]; // store1,store2,store3  (magaza slug)
  brand?: string[]; // brand1,brand2,brand3 (brand slug)
  score?: number[]; // 3,2,5 (ratings)
};
