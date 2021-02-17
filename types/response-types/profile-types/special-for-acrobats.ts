export type IGetSpecialForAcrobats = {
  firstSection: {
    title: string;
    content: string;
    total: string;
  };
  secondSection: {
    title: string;
    image: string;
    order: number;
  }[];
  thirdSection: {
    title: string;
    content: string;
    order: number;
  }[];
  fourthSectionImage: string;
  fourthSection: {
    name: string;
    id: string;
    url: string;
    image: string;
    order: number;
  }[];
};
