export type IProductRegular = {
  hasVariant: boolean;
  images: {
    listImage: string;
    detailImage: string;
  };
  productScore: number;
  discountType: string | null;
  _id: string;
  status: string;
  title: string;
  price: number;
  stock: number;
  shippingDetail: {
    freeShipping: boolean;
  };
  url: string;
  isDiscountExists: boolean;
  discountRate: number;
  salePrice: number;
  startDate: Date;
  endDate: Date;
};

export type IHalProduct = {
  _id: string;
  title: string;
  hasVariant: string;
  discountType: string;
  status: string;
  productScore: number;
  stock: number;
  stockStatus: string;
  images: {
    listImage: string;
    detailImage: string;
  };
  storeName: string;
  storeId: string;
};

export type IPazarProduct = {
  hasVariant: boolean;
  images: {
    listImage: string;
    detailImage: string;
  };
  productScore: number;
  commentCount: number;
  discountType: string;
  price: string;
  salePrice: string;
  buttonType: string;
  shippingDetail: {
    freeShipping: boolean;
    _id: string;
    id: string;
  };
  isProductNew: number;
  _id: string;
  status: string;
  title: string;
  stock: number;
  stockStatus: string;
  url: string;
  storeName: string;
  storeId: string;
  productType: 'c2c-ind' | 'c2c-corp';
};
