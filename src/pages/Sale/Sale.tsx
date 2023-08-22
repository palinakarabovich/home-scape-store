import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './Sale.module.css'
import { useAppDispatch } from '../../hooks/useAppDispatch';
import ProductsList from '../../components/ProductsList/ProductsList';
import Category from '../../components/Category/Category';
import { useSearchParams } from 'react-router-dom';
import { fetchProductsOnSale, filterProductsOnSale } from '../../redux/slices/saleSlice';

const type = 'sale';

const Sale = () => {
  const dispatch = useAppDispatch();
  const {products, categories, loadingSale} = useAppSelector((store) => store.sale)
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const params = searchParams.get('subcategory');
    if (params) {
      dispatch((fetchProductsOnSale({
        subcategory: params
      })))
      setSelectedCategory(params);
    } else {
      dispatch((fetchProductsOnSale({
        subcategory: ''
      })));
    }
  }, [])

  const onCategoryClick = (cat: string) => {
    if (cat === selectedCategory) {
      setSelectedCategory('');
      setSearchParams({});
      dispatch(fetchProductsOnSale({
        subcategory: ''
      }));
    } else {
      setSelectedCategory(cat);
      setSearchParams({ subcategory: cat });
      dispatch(filterProductsOnSale(cat))
    }
  }

  return (
    <section className={styles.sale}>
      <h2 className={styles.title}>{type}</h2>
      {
        categories?.length > 0
          ? <ul className={styles.categories}>
            {
              categories?.map((c) => <Category name={c} handleClick={onCategoryClick} isSelected={c === selectedCategory ? true : false} key={c}/>)
            }
          </ul>
          : <div className={styles.container} />
      }
      <ProductsList products={products} loading={loadingSale.success}/>
    </section>
  );
}

export default Sale;