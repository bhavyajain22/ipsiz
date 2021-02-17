import {
  IHalProduct,
  IPazarProduct,
  IProductRegular,
} from '../../types/IProductRegular.type';

export const mockProduct: IProductRegular = {
  hasVariant: false,
  images: {
    listImage:
      'https://www.ipsizcambaz.com/ucdn/images//5z4khllut2k0kdognsvv-7u443y3pl1s0kdognsvx-list.jpg',
    detailImage:
      'https://www.ipsizcambaz.com/ucdn/images//5z4khllut2k0kdognsvv-7u443y3pl1s0kdognsvx-detail.jpg',
  },
  productScore: 0,
  discountType: null,
  _id: '5f31361275c6dc8b04b28951',
  status: 'approved',
  title: 'ACTİVEX ACTİV SIVI SABUN 300 ML',
  price: 1989,
  stock: 3,
  shippingDetail: {
    freeShipping: true,
  },
  url: 'string',
  isDiscountExists: true,
  discountRate: 20,
  salePrice: 19.89,
};

export const mockProductHal: IHalProduct = {
  _id: '5c94c52c75514e24f8d0392c',
  title: 'Dolu Commando 12 Volt Akülü Araba Jeep',
  productScore: 0,
  stock: 100,
  stockStatus: 'Stokta var',
  images: {
    listImage:
      'https://www.ipsizcambaz.com/ucdn/images//s8qix12t1j4jtjsbcsn-65qfkxzmqe40jtjsbcso-list.jpg',
    detailImage:
      'https://www.ipsizcambaz.com/ucdn/images//s8qix12t1j4jtjsbcsn-65qfkxzmqe40jtjsbcso-detail.jpg',
  },
  storeName: 'Akıllı Karınca',
  storeId: '5be5b07984ad9adf23173b40',
};

export const mockProductPazar: IPazarProduct = {
  hasVariant: false,
  images: {
    listImage:
      'https://www.ipsizcambaz.com/ucdn/images//4rg4i5al1sm0jyy4a873-5eaye9nywow0jyy4a8dn-list.jpg',
    detailImage:
      'https://www.ipsizcambaz.com/ucdn/images//4rg4i5al1sm0jyy4a873-5eaye9nywow0jyy4a8dn-detail.jpg',
  },
  productScore: 0,
  discountType: 'discountAmount',
  buttonType: 'Sepete Ekle',
  shippingDetail: {
    freeShipping: true,
    _id: '5d3ea53292b60ff62aabba33',
    id: '5d3ea53292b60ff62aabba33',
  },
  isProductNew: 1,
  _id: '5d47fb0c3f0941f210b285cf',
  status: 'approved',
  title: 'Harry Potter Diriltme Taşı Yüzüğü',
  stock: 100,
  stockStatus: 'Stokta var',
  url:
    'https://www.ipsizcambaz.com/c2c/harry-potter-diriltme-tasi-yuzugu-5d47fb0c3f0941f210b285cf',
  storeName: 'fandomya',
  storeId: '5d3ea4660206c8bd95a97822',
};
