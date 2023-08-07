import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.css'
import { IProductsListProps } from './types';
import { Link, useLocation } from 'react-router-dom';

const ProductsList: React.FC<IProductsListProps> = ({ products }) => {

  return (
    <div className={styles.products}>
      {products.map((card) => (
          <ProductCard {...card} key={card.id} />
      ))}
    </div>
  );
}

export default ProductsList;