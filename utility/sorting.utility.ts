export const convertNumberToSortingText = (val: 0 | 1 | 2 | 3 | 4 | 5 | 6) => {
  switch (val) {
    case 0:
      return 'Akıllı Sıralama';
    case 1:
      return 'Çok Satanlar';
    case 2:
      return 'En Yeniler';
    case 3:
      return 'Çok Yorumlanan';
    case 4:
      return 'Yüksek Puan';
    case 5:
      return 'Artan Fiyat';
    case 6:
      return 'Azalan Fiyat';
  }
};
