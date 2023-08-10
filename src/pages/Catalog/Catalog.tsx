import styles from './Catalog.module.css'
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import ProductsList from '../../components/ProductsList/ProductsList';
import React from 'react';
import { ICatalog } from './types';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchProducts } from '../../redux/slices/productsSlice';
import { useSearchParams } from 'react-router-dom';

const Catalog: React.FC<ICatalog> = ({ type }) => {

  const { products } = useAppSelector((store) => store.products);
  const { categories } = useAppSelector((store) => store.categories)
  const dispatch = useAppDispatch();
  const [searchParams, _] = useSearchParams();

  React.useEffect(() => {
    const params = searchParams.get('subcategory');
    if (!params) {
      const query = `${type === 'all' ? '' : `category=${type}`}`;
      dispatch(fetchProducts({ type, query }))
    } else {
      const query = `subcategory=${params}`;
      dispatch(fetchProducts({ type, query }))
    }
  }, [type, searchParams])
  
  React.useEffect(() => {

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
          : <CategoriesList categories={categories}/>
      }
      <ProductsList products={products[type]} />
    </section>
  );
}

export default Catalog;