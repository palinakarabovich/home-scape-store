import { ICategory, ICategoryRoute } from "../@types/types"

//@ts-ignore
export const createCategoriesList = (list: Array<string>) => [...new Set(list)]

export const createCategoriesRoutes = (categories: Array<ICategory>) => {
  const newRoutes: Array<ICategoryRoute> = [{
    name: 'all',
    url: '/all',
    category: false,
    subcategory: false
  }];
  categories.forEach((cat) => {
    newRoutes.push({ name: cat.name, image: cat.image, url: `/${cat.name.toLowerCase()}`, category: true, subcategory: false });
    cat.subcategories.forEach((sub) => {
      newRoutes.push({ name: sub.name, url: `/${sub.name.toLowerCase()}`, category: false, subcategory: true });
    });
  });
  return newRoutes;
}