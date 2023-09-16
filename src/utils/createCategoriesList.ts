import { ICategory, ICategoryRoute } from "../@types/types"

//@ts-ignore
export const createCategoriesList = (list: Array<string>) => [...new Set(list)]

export const createCategoriesRoutes = (categories: Array<ICategory>) => {
  const newRoutes: Array<ICategoryRoute> = [{
    name: 'all',
    url: '/home-scape-store/all',
  }];
  categories.forEach((cat) => {
    newRoutes.push({ name: cat.name, image: cat.image, url: `/home-scape-store/${cat.name.toLowerCase()}`});
    cat.subcategories.forEach((sub) => {
      newRoutes.push({ name: sub.name, url: `/home-scape-store/${sub.name.toLowerCase()}`});
    });
  });
  return newRoutes;
}