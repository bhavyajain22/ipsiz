import {ICategoryItem} from '../ICategory.type';
import {IHalProduct} from '../IProductRegular.type';
import {IStore} from '../IStore.type';

// SLIDER
export type IHalSlider = {
  title: string;
  order: number;
  image: string;
  url: string;
  category: ICategoryItem;
};

export type IGetHalSliders = IHalSlider[];

// POPULAR PRODUCTS
export type IGetHalPopularProducts = IHalProduct[];

// RECENT STORES
export type IGetHalRecentStores = IStore[];

// RECENT PRODUCTS
export type IGetHalRecentProducts = IHalProduct[];

// CATEGORY SHOWCASE
export type ISubCategory = {id: string; name: string; products: IHalProduct[]};

export type ICategoryShowcase = {
  categoryId: string;
  categoryName: string;
  subCategories: ISubCategory[];
};

export type IGetHalCategoryShowcases = ICategoryShowcase[];

// HTML CONTENTS
export type IHalHTMLContent = {
  title: string;
  iconName: string;
  content: string;
};

export type IGetHalHTMLContents = IHalHTMLContent[];
