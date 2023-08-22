import { LatLngLiteral } from "leaflet";

export interface IProduct {
  name: string,
  description: string,
  price: number,
  discount: number,
  subcategory: string,
  images: Array<string>,
  category: string,
  id: string,
  hasDiscount: boolean
}

export interface ICategory {
  name: string,
  url: string,
  image?: string,
  subcategories: Array<ICategory>
}

export interface ICategoryRoute {
  name: string,
  url: string,
  image?: string
}

export type TPosition = {
  coordinates: LatLngLiteral;
}

export interface IDataLoading {
  status: boolean,
  error: boolean,
  message: string,
  success: boolean
}

export interface IRejectedActionPayload {
  message: string;
  name: string;
  stack?: string;
}

export interface IPurchase {
  item: IProduct,
  quantity: number
}

export interface IPayment {
  name: string;
  images: Array<string>
}
export interface IDelivery {
  name: string;
  price: number;
  duration: string
}