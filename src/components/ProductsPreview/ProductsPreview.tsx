import React from 'react';
import styles from './ProductsPreview.module.css'
import { IProductPreviewProps } from './types';
import productsData from '../../assets/products';
import { IProduct } from '../../@types/types';
import ProductCard from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';


const ProductsPreview: React.FC<IProductPreviewProps> = ({ type }) => {

  const [dataProducts, satDataProducts] = React.useState<Array<IProduct>>([]);

  React.useEffect(() => {
    satDataProducts(productsData.filter((p) => p.category === type));
  }, [])

  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>{type}</h2>
      <div className={styles.products}>
        {
          dataProducts.map((p, index) => index < 3 && (
            <ProductCard key={index} {...p} />
          ))
        }
      </div>
      <Link to={`/${type}`} className={styles.link}>
        More products &#8594;
      </Link>
    </section>
  );
}

export default ProductsPreview;