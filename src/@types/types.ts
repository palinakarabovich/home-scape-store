export interface IProductsData {
  category: string,
  products: Array<IProduct> | []
}

export interface IProduct {
  name: string,
  description: string,
  price: number,
  discount: number,
  subcategory: string,
  image: string
}