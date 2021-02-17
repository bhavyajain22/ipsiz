export type IAddress = {
  invoice: {
    eInvoice: boolean;
  };
  addressName: string;
  gsmConfirmed: boolean;
  updated_at: Date;
  updated_by: string;
  _id: string;
  city: string;
  county: string;
  addressType: string;
  addressText: string;
  postalCode: string;
  created_at: Date;
  user: string;
  updatedAt: Date;
  __v: number;
  vPhone: string;
  id: string;
};

export type ICity = {
  _id: string;
  name: string;
  plateNumber: string;
};

export type ICounty = {
  _id: string;
  name: string;
};
