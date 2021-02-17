import {ICategoryItem} from '../ICategory.type';
import {IPazarProduct} from '../IProductRegular.type';

// SLIDERS
export type IPazarSlider = {
  title: string;
  order: number;
  image: string;
  url: string;
  category: ICategoryItem;
};

export type IGetPazarSliders = IPazarSlider[];

// BANNERS
export type IPazarBanner = {
  title: string;
  order: number;
  image: string;
  category: ICategoryItem;
};

export type IGetPazarBanners = IPazarBanner[];

// WIDE BANNER
export type IPazarWideBanner = {
  time: string;
  path: string;
  imageUrl: string;
};

// MAIN TABS
export type IPazarMainTab = {
  title: string;
  data: IPazarProduct[];
  total: number;
};

export type IGetPazarMainTabs = IPazarMainTab[];

// CATEGORY SHOWCASE
export type IPazarSingleCategoryShowcase = {
  id: string;
  backendName: string;
  text: string;
  path: string;
  iconName: string;
  imageUrl: string;
  children: ICategoryItem[];
};

export type IGetPazarCategoryShowcase = IPazarSingleCategoryShowcase[];
