import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.css'
import { IProductsListProps } from './types';
import { useAppSelector } from '../../hooks/useAppSelector';
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';

const ProductsList: React.FC<IProductsListProps> = ({ products, loading }) => {

  return (
    <div className={styles.products}>
      {
        !loading 
          ? <>
            {[...new Array(3)].map((_, index) => <ProductCardSkeleton key={index}/>)}
          </>
          : <>{products?.map((card) => (
            <ProductCard {...card} key={card.id} />
          ))}</>
      }

    </div>
  );
}

export default ProductsList;