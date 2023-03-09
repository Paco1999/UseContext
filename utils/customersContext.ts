import { createContext } from "react";

export interface Customer {
  id: number,
  name: string,
  phoneNumber: string,
  joinedDate: string,
  expireDate: string,
  pic: string,
  job: string,
  logo: string,
  email: string
}

export const CustomerContext = createContext<Customer>({
  id: 0,
  name: '',
  phoneNumber: '',
  joinedDate: '',
  expireDate: '',
  pic: '',
  job: '',
  logo: '',
  email: ''
});
