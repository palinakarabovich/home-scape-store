import categories from '../../assets/categories';
import styles from './Catalog.module.css'
import productsData from '../../assets/products';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import ProductsList from '../../components/ProductsList/ProductsList';
import React from 'react';
import { ICatalog } from './types';
import { ICategory, IProduct } from '../../@types/types';
import { createCategoriesList } from '../../utils/createCategoriesList';
import { Outlet, useLocation } from 'react-router-dom';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';


const Catalog: React.FC<ICatalog> = ({ type, category, subcategory }) => {

  const [products, setProducts] = React.useState<Array<IProduct>>([]);
  const [categoriesList, setCategoriesList] = React.useState<Array<string>>([])

  React.useEffect(() => {
    if (type === 'all') {
      setProducts(productsData);
    } else if (type === 'sale') {
      setProducts(productsData.filter((p) => p.discount !== 0))
    } else if (category) {
      setProducts(productsData.filter((p) => p.category === type))
    } else {
      setProducts(productsData.filter((p) => p.subcategory === type))
    }
  }, [type])

  React.useEffect(() => {
    if (type === 'all') {
      setCategoriesList(createCategoriesList(products.map((p) => p.category)))
    } else if (type === 'sale') {
      setCategoriesList(createCategoriesList(products.map((p) => p.subcategory)))
    } else if (category) {
      setCategoriesList(['all', ...createCategoriesList(products.map((p) => p.subcategory))])
    } else {
      setCategoriesList(createCategoriesList(products.map((p) => p.category)))
    }
  }, [products])

  return (
    <section className={styles.catalog}>
      <h2 className={styles.title}>
        {type === 'all'
          ? 'Catalog'
          : type}
      </h2>
      {
        type === 'all'
          ? <CategoriesPreview />
          : categoriesList.length !== 0 &&
          <CategoriesList
            categories={categoriesList}
            subcategory={subcategory}
            category={category}
          />
      }
      <ProductsList products={products} />
    </section>
  );
}

export default Catalog;