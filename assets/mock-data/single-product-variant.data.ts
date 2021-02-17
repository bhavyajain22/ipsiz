export type ISingleVariant = {
  backendName: string;
  title: string;
  options: {optionTitle: string; value: string}[];
  selectedValue?: string | null;
};

export const productVariants: Array<ISingleVariant> = [
  {
    backendName: 'color',
    title: 'Renk',
    options: [
      {
        optionTitle: 'Kırmızı',
        value: 'red',
      },
      {
        optionTitle: 'Mavi',
        value: 'blue',
      },
      {
        optionTitle: 'Yeşil',
        value: 'green',
      },
    ],
  },
  {
    backendName: 'size',
    title: 'Boyut',
    options: [
      {
        optionTitle: '16 Inc',
        value: '16-inc',
      },
      {
        optionTitle: '18 Inc',
        value: '18-inc',
      },
    ],
  },
];
