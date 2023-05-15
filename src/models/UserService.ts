import { Company } from "./Company";

export interface UserService {
  id: number,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  company: Company,
  address: object
}