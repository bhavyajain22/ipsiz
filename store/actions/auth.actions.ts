import {IUser} from '../../types/IUser.type';
import {LOGOUT_USER, SET_USER} from '../types/auth.types';

export const setUserAction = (user: IUser) => ({type: SET_USER, payload: user});
export const logoutAction = () => ({type: LOGOUT_USER});
