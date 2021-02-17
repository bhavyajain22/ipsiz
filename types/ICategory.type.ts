export type ICategoryItem = {
  id: string;
  backendName: string;
  path: string;
  iconName: string;
  text: string;
  imageUrl: string | null;
  children?: ICategoryItem[];
};
