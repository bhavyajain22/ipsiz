export type IMyProfile = {
  firstName: string;
  lastName: string;
  email: string;
  date: {
    day: number;
    mounth: number;
    year: number;
  };
  gsm: string;
  emailConfirmed: boolean;
  gsmConfirmed: boolean;
};
