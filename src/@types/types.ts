export interface IProduct {
  name: string,
  description: string,
  price: number,
  discount: number,
  subcategory: string,
  image: string,
  category: string
}

export interface ICategory {
  name: string,
  url: string,
  image?: string,
  subcategories: Array<ICategory>
}