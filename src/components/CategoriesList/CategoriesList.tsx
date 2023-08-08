import { Link, useSearchParams } from 'react-router-dom';
import styles from './CategoriesList.module.css'
import React from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ICategory } from '../../@types/types';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchProducts } from '../../redux/slices/productsSlice';

const CategoriesList: React.FC = () => {

  const dispatch = useAppDispatch();
  const { products } = useAppSelector((store) => store.products);
  const { categories } = useAppSelector((store) => store.categories);
  const [category, setCategory] = React.useState<ICategory>();
  const [subcategories, setSubcategories] = React.useState<Array<string>>([]);
  const [selectedSubcategory, setSelectedSubcategory] = React.useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const params = searchParams.get('subcategory');
    if (params) {
      setSelectedSubcategory(params);
      checkCategoryName();
    } else {
      setSelectedSubcategory('');
    }
  }, [searchParams])

  React.useEffect(() => {
    checkCategoryName();
  }, [products])


  React.useEffect(() => {
    if (category) {
      setSubcategories(category.subcategories.map((c) => c.name))
    }
  }, [category])

  const checkCategoryName = () => {
    const currentCategoryName = Object.keys(products)[0];
    const currentCategory = categories.find((c) => c.name.toLowerCase() === currentCategoryName);
    setCategory(currentCategory);
  }

  const requestProductsBySelectedSubcategory = (sub: string) => {
    if (category) {
      const query = `subcategory=${sub}`;
      dispatch(fetchProducts({
        query,
        type: category.name.toLowerCase()
      }))
    }
  }

  const handleCategoryClick = (sub: string) => {
    if (category) {
      if (sub === selectedSubcategory) {
        setSearchParams({});
        const query = `category=${category.name.toLowerCase()}`;
        dispatch(fetchProducts({
          query,
          type: category.name.toLowerCase()
        }))
        setSelectedSubcategory('');
      } else {
        setSelectedSubcategory(sub)
        requestProductsBySelectedSubcategory(sub);
        setSearchParams({ subcategory: sub })
      }
    }
  }

  return (
    <ul className={styles.categories}>
      {
        subcategories.length !== 0 ?
        <>
          <Link
            to={`/all`}
            className={styles.link}
            key={'all'}
          >
            <li className={styles.category}>
              back to ALL
            </li>
          </Link>
          {subcategories.map((sub) => (
            <li
              className={`${styles.category} ${selectedSubcategory === sub ? styles.category_active : ''}`}
              key={sub}
              onClick={() => handleCategoryClick(sub)}
            >
              {sub}
              {
                selectedSubcategory === sub && <div className={styles.icon} />
              }
            </li>
          )
          )}
        </>
        : <div className={styles.container} />
      }
    </ul>
  );
}

export default CategoriesList;