import { IProduct } from "../../@types/types";

export interface IProductsListProps {
  products: Array<IProduct>,
  loading: boolean
}