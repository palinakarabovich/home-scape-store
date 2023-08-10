import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './Sale.module.css'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchProducts } from '../../redux/slices/productsSlice';
import ProductsList from '../../components/ProductsList/ProductsList';
import { setCategoriesWithDiscount } from '../../redux/slices/categoriesSlice';
import CategoriesList from '../../components/CategoriesList/CategoriesList';

const type = 'sale';

const params = {
  type,
  query: ''
}

const Sale = () => {

  const { products } = useAppSelector((store) => store.products);
  const { categoriesWithDiscount } = useAppSelector((store) => store.categories)
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProducts(params))
  }, [])

  React.useEffect(() => {
    const categoriesWithSale = products[type]?.map((p) => {
      return {
        name: p.subcategory,
        url: `/${p.subcategory}`,
        subcategories: []
      }
    })
    dispatch(setCategoriesWithDiscount(categoriesWithSale));
  }, [products])

  return (
    <section className={styles.sale}>
      <h2 className={styles.title}>{type}</h2>
      {
        categoriesWithDiscount && <CategoriesList categories={categoriesWithDiscount} />
      }
      <ProductsList products={products[type]} />
    </section>
  );
}

export default Sale;