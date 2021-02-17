export type ISingleProductComment = {
  message: string;
  user: {
    firstName: string;
    lastName: string;
  };
  rate: number;
};

export type ISingleQA = {
  user: {
    firstName: string;
    lastName: string;
  };
  question: string;
  answer: string;
};

export type IProductDetailed = {
  activeAds: any;
  brand: {
    id: string;
    url: string;
    name: string;
  };
  store: {
    url: string;
    name: string;
    storeRating: string;
  };
  canAddBasket: boolean;
  qa: ISingleQA[];
  installmentDetails: string;
  hasVariant: boolean;
  images: {listImage: string; detailImage: string}[];
  productScore: number;
  discountType: string;
  dailyHit: number;
  _id: string;
  status: string;
  title: string;
  attributes: string;
  comments: ISingleProductComment[];
  description: string;
  price: string;
  stock: number;
  stockStatus: string;
  url: string;
  isDiscountExists: boolean;
  discountRate: number;
  salePrice: string;
  shippingDetail: {
    freeShipping: boolean;
    sameDayShipping: boolean;
    fastShipping: boolean;
    shippingTime: string;
    shippingCompany: string;
    price: number;
  };
  variants: {
    variantProperties: {
      id: string;
      name: string;
      options: {id: string; name: string}[];
    }[];
    variantData: {
      id: string;
      text: string;
      slug: string;
      price: string;
      options: {id: string; name: string; property: string}[];
    }[];
  };
  platform: 'b2b' | 'b2c' | 'c2c';
  productType: string;
};

// export type IVariantConfig = {
//   id: string;
//   text: string;
//   slug: string;
//   price: string | null;
//   options: {id: string; name: string; property: string}[];
// };
