export type ISingleFilteringData = {
  type: 'category' | 'variant';
  title: string;
  reduxName?: string;
  selectedVal: string | number | null | undefined;
  options?: {value: string; title: string}[];
};

export const exampleFilteringData: ISingleFilteringData[] = [
  {
    type: 'category',
    title: 'Kategoriler',
    selectedVal: null,
  },
  {
    type: 'variant',
    title: 'Markalar',
    reduxName: 'brands',
    selectedVal: 'Adidas, Nike',
    options: [
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
    ],
  },
  {
    type: 'variant',
    title: 'Mağazalar',
    reduxName: 'stores',
    selectedVal: null,
    options: [
      {
        value: 'teknosa',
        title: 'Teknosa Ltd.',
      },
      {
        value: 'mediamarkt',
        title: 'Mediamarkt',
      },
      {
        value: 'dnr',
        title: 'D&R',
      },
    ],
  },
];
