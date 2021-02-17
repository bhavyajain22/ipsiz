export type IUser = {
  emailConfirmed: boolean;
  gsmConfirmed: boolean;
  provider: string;
  isGuest: boolean;
  hasToReSignContracts: boolean;
  isSubscribedToEmail: boolean;
  isSubscribedToSms: boolean;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  gsm: string;
  created_by: string;
  trGsm: string;
  vSex: string;
  fullName: string;
  isAdult: boolean;
};
