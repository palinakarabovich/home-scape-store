import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './Sale.module.css'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchProducts, findProductsOnSaleBySubcategory } from '../../redux/slices/productsSlice';
import ProductsList from '../../components/ProductsList/ProductsList';
import { setCategoriesWithDiscount } from '../../redux/slices/categoriesSlice';
import Category from '../../components/Category/Category';
import { useSearchParams } from 'react-router-dom';

const type = 'sale';

const query = '';

const Sale = () => {

  const { products } = useAppSelector((store) => store.products);
  const { categoriesWithDiscount } = useAppSelector((store) => store.categories)
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const params = searchParams.get('subcategory');
    if (params) {
      dispatch(fetchProducts({ query: `subcategory=${params}`, type }));
      setSelectedCategory(params);
    } else {
      dispatch(fetchProducts({ query, type }))
    }
  }, [])

  React.useEffect(() => {
    const categoriesWithSale = products[type]?.map((p) => {
      return p.subcategory
    })
    dispatch(setCategoriesWithDiscount(categoriesWithSale))
  }, [products])


  const onCategoryClick = (cat: string) => {
    if (cat === selectedCategory) {
      setSelectedCategory('');
      setSearchParams({});
      dispatch(fetchProducts({ query, type }));
    } else {
      setSelectedCategory(cat);
      setSearchParams({ subcategory: cat });
      dispatch(findProductsOnSaleBySubcategory(cat))
    }

  }

  return (
    <section className={styles.sale}>
      <h2 className={styles.title}>{type}</h2>
      {
        categoriesWithDiscount?.length > 0
          ? <ul className={styles.categories}>
            {
              categoriesWithDiscount?.map((c) => <Category name={c} handleClick={onCategoryClick} isSelected={c === selectedCategory ? true : false} />)
            }
          </ul>
          : <div className={styles.container} />
      }
      <ProductsList products={products[type]} />
    </section>
  );
}

export default Sale;