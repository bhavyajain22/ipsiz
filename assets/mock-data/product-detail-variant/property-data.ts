export type IOption = {
  id: string;
  name: string;
};

export type IVariantProperty = {
  id: string;
  name: string;
  options: IOption[];
};

export const propertyData: IVariantProperty[] = [
  {
    id: '5f2bbbcb31021683a9be12a6',
    name: 'BEDEN SEÇİNİZ',
    options: [
      {
        id: '5f2bbbcb31021683a9be12a7',
        name: 'M',
      },
      {
        id: '5f2bbbcb31021683a9be12a8',
        name: 'L',
      },
      {
        id: '5f2bbbcb31021683a9be12a9',
        name: 'XL',
      },
      {
        id: '5f2bbbcb31021683a9be12aa',
        name: 'S',
      },
    ],
  },
  {
    id: '5f2bbbcb31021683a9be12ab',
    name: 'KAN GRUBUNUZ',
    options: [
      {
        id: '5f2bbbcb31021683a9be12ac',
        name: '0(+)',
      },
      {
        id: '5f2bbbcb31021683a9be12ad',
        name: 'A(+)',
      },
      {
        id: '5f2bbbcb31021683a9be12ae',
        name: 'A(--)',
      },
      {
        id: '5f2bbbcb31021683a9be12af',
        name: 'B(+)',
      },
      {
        id: '5f2bbbcb31021683a9be12b0',
        name: 'B(--)',
      },
      {
        id: '5f2bbbcb31021683a9be12b1',
        name: '0(--)',
      },
      {
        id: '5f2bbbcb31021683a9be12b2',
        name: 'AB(+)',
      },
      {
        id: '5f2bbbcb31021683a9be12b3',
        name: 'AB(--)',
      },
    ],
  },
  {
    id: '5f2bbbcb31021683a9be12b4',
    name: 'RÜTBE SEÇİNİZ',
    options: [
      {
        id: '5f2bbbcb31021683a9be12b5',
        name: 'Uz.Çvş.',
      },
      {
        id: '5f2bbbcb31021683a9be12b6',
        name: 'Uz.Çvş.1.Kd.',
      },
      {
        id: '5f2bbbcb31021683a9be12b7',
        name: 'Uz.Çvş.2.Kd.',
      },
      {
        id: '5f2bbbcb31021683a9be12b8',
        name: 'Uz.Çvş.3.Kd.',
      },
      {
        id: '5f2bbbcb31021683a9be12b9',
        name: 'Uz.Jan.3.Kad.',
      },
      {
        id: '5f2bbbcb31021683a9be12ba',
        name: 'Uz.Jan.4.Kad.',
      },
      {
        id: '5f2bbbcb31021683a9be12bb',
        name: 'Uz.Jan.5.Kad.',
      },
      {
        id: '5f2bbbcb31021683a9be12bc',
        name: 'Uz.Jan.6.Kad.',
      },
      {
        id: '5f2bbbcb31021683a9be12bd',
        name: 'Ast.Çvş.',
      },
      {
        id: '5f2bbbcb31021683a9be12be',
        name: 'Ast.Kıd.Çvş.',
      },
      {
        id: '5f2bbbcb31021683a9be12bf',
        name: 'Ast.Üst Çvş.',
      },
      {
        id: '5f2bbbcb31021683a9be12c0',
        name: 'Ast.Kıd.Üst Çvş.',
      },
      {
        id: '5f2bbbcb31021683a9be12c1',
        name: 'Ast.Baş Çavuş',
      },
      {
        id: '5f2bbbcb31021683a9be12c2',
        name: 'Ast.Kıd.Baş Çvş.',
      },
      {
        id: '5f2bbbcb31021683a9be12c3',
        name: 'Uz.Onbaşı',
      },
    ],
  },
];
