import { LatLngLiteral } from "leaflet";

export interface IProduct {
  name: string,
  description: string,
  price: number,
  discount: number,
  subcategory: string,
  image: string,
  category: string,
  id: number
}

export interface ICategory {
  name: string,
  url: string,
  image?: string,
  subcategories: Array<ICategory>
}

export type TPosition = {
  coordinates: LatLngLiteral;
}

export interface IDataLoading {
  status: boolean,
  error: boolean,
  message: string
}

export interface IRejectedActionPayload {
  message: string;
  name: string;
  stack?: string;
}
