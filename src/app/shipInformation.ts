import { Product } from "./product";

export interface ShipInformation{
  id: number;
  idUser:number;
  fullName: string;
  sodt: string;
  address : string;
  city : string;
  distric : string;
  village: string;
  products:Product[];
  dateCreate: Date;
  status : number
}
