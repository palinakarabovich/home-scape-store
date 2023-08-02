import React from 'react';
import styles from './ProductsPreview.module.css'
import { IProductPreviewProps } from './types';
import productsData from '../../assets/products';
import { IProductsData } from '../../@types/types';
import ProductCard from '../ProductCard/ProductCard';

const initialState = {
  category: '',
  products: []

}

const ProductsPreview: React.FC<IProductPreviewProps> = ({ type }) => {

  const [dataProducts, satDataProducts] = React.useState<IProductsData>(initialState);

  React.useEffect(() => {
    satDataProducts(productsData[type] as IProductsData)
  }, [])

  return (
    <section className={styles.preview}>
      <h2 className={styles.title}>{dataProducts.category}</h2>
      <div className={styles.products}>
        {
          dataProducts.products.map((p, index) => index < 3 && (
            <ProductCard key={index} {...p} />
          ))
        }
      </div>
      <button
        className={styles.button}
        type='button'
      >
        More products &#8594;
      </button>
    </section>
  );
}

export default ProductsPreview;