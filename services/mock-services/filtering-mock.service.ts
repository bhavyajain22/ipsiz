import {mockProduct} from '../../assets/mock-data/single-product.data';

const allBrands: {value: string; title: string}[] = [
  {
    value: 'nike',
    title: 'Nike',
  },
  {
    value: 'adidas',
    title: 'Adidas',
  },
  {
    value: 'Puma',
    title: 'Puma',
  },
  {
    value: 'Under Armour',
    title: 'underarmour',
  },
  {
    value: 'hummel',
    title: 'Hummel',
  },
  {
    title: 'Rebook',
    value: 'rebook',
  },
  {
    title: 'Decathlon',
    value: 'decathlon',
  },
  {
    title: 'The North Face',
    value: 'thenothface',
  },
  {
    title: 'Columbia',
    value: 'columbia',
  },
];

const allStores = [
  {
    title: 'Teknosa Ltd.',
    value: 'teknosa',
  },
  {
    title: 'Mediamarkt Ltd.',
    value: 'mediamarkt',
  },
  {
    title: 'Kardeşler Giyim',
    value: 'kardeslergiyim',
  },
  {
    title: 'Osman Pazarlama',
    value: 'osmanpazarlama',
  },
  {
    title: 'Gittigidiyor',
    value: 'gittigidiyor',
  },
  {
    title: 'N11',
    value: 'n11',
  },
  {
    title: 'Trendyol',
    value: 'trendyol',
  },
  {
    title: 'Mia Giyim',
    value: 'miagiyim',
  },
  {
    title: 'Berk Pazarlama',
    value: 'berkpazarlama',
  },
  {
    title: 'Ali Pazarlama',
    value: 'alipazarlama',
  },
  {
    title: 'Türk Hava Yolları',
    value: 'turkhavayollari',
  },
];

type IFilteringState = {
  category: string | null;
  brands: string[];
  ratings: string[];
  stores: string[];
  priceRange: {startingPrice: string | null; endingPrice: string | null};
  sorting: string | null;
};

export const getAvailableBrandsMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomRange: number = Math.round(Math.random() * 10);
      return resolve(allBrands.slice(0, randomRange));
    }, 1000);
  });
};

export const getAvailableStoresMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomRange: number = Math.round(Math.random() * 10);
      return resolve(allStores.slice(0, randomRange));
    }, 1000);
  });
};

export const getFilteredItemsMock = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve({
        data: Array(10)
          .fill(null)
          .map((_) => mockProduct),
        totalCount: 30,
      });
    }, 3000);
  });
};
