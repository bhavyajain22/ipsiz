import {IUser} from '../../IUser.type';

export type RootStackParamList = {
  tab_stack: undefined;
  search_stack: undefined;
  product_detail_screen: {
    productName: string;
    id: string;
  };
  hal_product_detail_screen: {
    productName: string;
    id: string;
  };
  pazar_product_detail_screen: {
    productName: string;
    id: string;
  };
  store_stack: undefined;
  forgot_password_stack: undefined;
  auth_stack: undefined;
  phone_verification_screen: {user: IUser; JWT: string};
  global_search_modal_screen: undefined;
};
