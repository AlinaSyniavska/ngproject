import {IUser} from "./user.interface";
import {ICompany} from "./company.interface";

export interface IUserDetails extends IUser {
  username: string,
  phone: string,
  website: string,
  company: ICompany,
}

