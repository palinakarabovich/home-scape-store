import styles from './Catalog.module.css'
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import ProductsList from '../../components/ProductsList/ProductsList';
import React from 'react';
import { ICatalog } from './types';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchProducts } from '../../redux/slices/productsSlice';

const Catalog: React.FC<ICatalog> = ({ type, category, subcategory }) => {

  const [categoriesList, setCategoriesList] = React.useState<Array<string>>([]);
  const { products, loading } = useAppSelector((store) => store.products);
  const dispatch = useAppDispatch();


  React.useEffect(() => {
    const query = `${category ? `category=${type}` : subcategory ? `subcategory=${type}` : '' }` ;
    dispatch(fetchProducts({ type, query }))
  }, [type])

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
          : categoriesList.length !== 0 &&
          <CategoriesList
            categories={categoriesList}
            subcategory={subcategory}
            category={category}
          />
      }
      {
        loading.success && !loading.status ? <ProductsList products={products[type]} /> : <>Loading</>
      }

    </section>
  );
}

export default Catalog;