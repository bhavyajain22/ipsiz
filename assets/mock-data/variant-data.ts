// type ISingleOption = {
//   optionTitle: string;
//   value: string;
// };

// export interface IVariant<T extends 'multiple' | 'single' | 'text'> {
//   title: string;
//   backendName: string;
//   type: T;
//   options: T extends 'multiple' | 'single' ? ISingleOption[] : never;
// }

// const colorVariant: IVariant<'multiple'> = {
//   title: 'Renk',
//   type: 'multiple',
//   backendName: 'color',
//   options: [
//     {
//       optionTitle: 'Kırmızı',
//       value: 'red',
//     },
//     {
//       optionTitle: 'Mavi',
//       value: 'blue',
//     },
//     {
//       optionTitle: 'Siyah',
//       value: 'black',
//     },
//   ],
// };

// const sizeVariant: IVariant<'multiple'> = {
//   title: 'Boyut',
//   type: 'multiple',
//   backendName: 'size',
//   options: [
//     {
//       optionTitle: '16 Inc',
//       value: '16-inc',
//     },
//     {
//       optionTitle: '18 Inc',
//       value: '18-inc',
//     },
//     {
//       optionTitle: '22 Inc',
//       value: '22-inc',
//     },
//   ],
// };

// export const variantData: IVariant<'multiple' | 'single' | 'text'>[] = [
//   sizeVariant,
//   colorVariant,
// ];
