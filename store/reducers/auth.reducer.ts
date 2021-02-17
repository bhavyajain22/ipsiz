import {Reducer} from 'redux';
import {IUser} from '../../types/IUser.type';
import {LOGOUT_USER, SET_USER} from '../types/auth.types';

export type authReducerState = IUser;

const initialState: authReducerState = {
  emailConfirmed: false,
  gsmConfirmed: false,
  provider: 'local',
  isGuest: true,
  hasToReSignContracts: false,
  isSubscribedToEmail: false,
  isSubscribedToSms: false,
  _id: '',
  firstName: '',
  lastName: '',
  email: '',
  gsm: '',
  created_by: '',
  trGsm: '',
  vSex: '',
  fullName: '',
  isAdult: false,
};

const AuthReducer: Reducer<authReducerState> = (
  state = initialState,
  action: any,
) => {
  switch (action.type) {
    case SET_USER:
      return {...state, ...action.payload};
    case LOGOUT_USER:
      return {
        emailConfirmed: false,
        gsmConfirmed: false,
        provider: 'local',
        isGuest: true,
        hasToReSignContracts: false,
        isSubscribedToEmail: false,
        isSubscribedToSms: false,
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        gsm: '',
        created_by: '',
        trGsm: '',
        vSex: '',
        fullName: '',
        isAdult: false,
      };
    default:
      return state;
  }
};

export default AuthReducer;
