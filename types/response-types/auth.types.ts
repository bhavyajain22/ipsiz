import {IUser} from '../IUser.type';

export type ILoginResponse = {
  user: IUser;
  JWT: string;
};
