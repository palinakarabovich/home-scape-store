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
  const [size, setSize] = React.useState([window.innerWidth, window.innerHeight]);

  React.useEffect(() => {
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  React.useEffect(() => {
    const query = `category=${type}`;
    dispatch(fetchProducts({ query, type }))
  }, [])

  const updateSize = () => {
    setSize([window.innerWidth, window.innerHeight]);
    console.log(size)
  }

  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>{type}</h2>
      {loading.success && !loading.status ?
        <div className={styles.products}>
          {
            size[0] > 1350 ?
              products[type]?.map((p, index) => index < 3 && (
                <ProductCard key={p.id} {...p} />
              ))
              : products[type]?.map((p, index) => index < 2 && (
                <ProductCard key={p.id} {...p} />
              ))
          }
          {

          }
        </div>
        : <div className={styles.products}>
          {
            size[0] > 1350 ?
              [...new Array(3)].map((el) => <ProductCardSkeleton />)
              : [...new Array(2)].map((el) => <ProductCardSkeleton />)}
        </div>
      }
      <Link to={`/${type}`} className={styles.link}>
        More products &#8594;
      </Link>
    </section>
  );
}

export default ProductsPreview;