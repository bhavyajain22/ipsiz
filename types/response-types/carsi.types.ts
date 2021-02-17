import {ICategoryItem} from '../ICategory.type';
import {IProductRegular} from '../IProductRegular.type';

// SLIDER
export type ISlider = {
  title: string;
  order: number;
  image: string;
  category: ICategoryItem;
};

export type IGetSliders = ISlider[];

// BANNER
export type IBanner = {
  category: ICategoryItem;
  order: number;
  title: string;
  image: string;
};

export type IGetBanners = IBanner[];

// POPULAR PRODUCTS
export type IGetPopularProducts = IProductRegular[];

// WEEKLY PROMOS
export type IGetWeeklyPromos = IProductRegular[];

// MOSTLY VIEWED PRODUCTS
export type IGetMostlyViewedProducts = IProductRegular[];

// PROMO PRODUCTS
export type IPromoSection = {
  categoryName: string;
  order: number;
  products: IProductRegular[];
};

export type IGetPromoProducts = IPromoSection[];

// BEST SELLER CATEGORY
export type IBestSellerSection = {
  _id: string;
  name: string;
  sequence: string;
  showcases: {
    [key: string]: ICategoryItem;
  };
};

export type IGetBestSellerCategories = IBestSellerSection[];

// UNBELIEVABLE DISCOUNTED PRODUCTS
export type IGetUnbelievableDiscountedProducts = IProductRegular[];

// BRAND CATEGORY
export type IBrandCategory = {
  backendName: string;
  image: {
    listImage: string;
    detailImage: string;
  };
  brandLogo: {
    listImage: string;
    detailImage: string;
  };
  title: string;
  description: string;
  order: number;
  category: ICategoryItem;
};

export type IGetBrandCategories = IBrandCategory[];
