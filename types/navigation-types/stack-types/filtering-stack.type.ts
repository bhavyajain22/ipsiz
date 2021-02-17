import {ICategoryItem} from '../../ICategory.type';

export type IFilteringParamList = {
  filtering_screen: undefined;
  filtering_deep_category_screen: {
    selectedCategory: ICategoryItem;
    categories: ICategoryItem[];
  };
  filtering_brands_screen: undefined;
  filtering_stores_screen: undefined;
  filtering_price_range_screen: undefined;
  filtering_rating_screen: undefined;
};
