import React from 'react';
import styles from './ProductsPreview.module.css'
import { IProductPreviewProps } from './types';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchProducts } from '../../redux/slices/productsSlice';
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';


const ProductsPreview: React.FC<IProductPreviewProps> = ({ type }) => {

  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((store) => store.products);

  React.useEffect(() => {
    const query = `category=${type}`;
    dispatch(fetchProducts({ query, type }))
  }, [])

  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>{type}</h2>
      {loading.success && !loading.status ?
        <div className={styles.products}>
          {
            products[type]?.map((p, index) => index < 3 && (
              <ProductCard key={p.id} {...p} />
            ))
          }
        </div>
        : <div className={styles.products}>
          {[...new Array(3)].map((el) => <ProductCardSkeleton />)}
        </div>
      }
      <Link to={`/${type}`} className={styles.link}>
        More products &#8594;
      </Link>
    </section>
  );
}

export default ProductsPreview;