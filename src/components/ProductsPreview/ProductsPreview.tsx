import React from 'react';
import styles from './ProductsPreview.module.css'
import { IProductPreviewProps } from './types';
import productsData from '../../assets/products';
import { IProductsData } from '../../@types/types';

const initialState = {
  category: '',
  products: []

}

const ProductsPreview: React.FC<IProductPreviewProps>= ({type}) => {

  const [dataProducts, satDataProducts] = React.useState<IProductsData>(initialState);

  React.useEffect(() => {
    satDataProducts(productsData[type] as IProductsData)
  }, [])

  return (
  <section className={styles.preview}>
    <h2 className={styles.title}>{dataProducts.category}</h2>
    {
      dataProducts.products.map((p, index) => (
        <div>
          {p.name}
        </div>
      ))
    }
  </section>
  );
}
 
export default ProductsPreview;