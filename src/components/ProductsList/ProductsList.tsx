import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.css'
import { IProductsListProps } from './types';
import { useAppSelector } from '../../hooks/useAppSelector';
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';

const ProductsList: React.FC<IProductsListProps> = ({ products }) => {

  const { loading } = useAppSelector((store) => store.products)

  return (
    <div className={styles.products}>
      {
        !loading.status && loading.success
          ? <>{products?.map((card) => (
            <ProductCard {...card} key={card.id} />
          ))}</>
          : <>
            {[...new Array(3)].map((_) => <ProductCardSkeleton />)}
          </>
      }

    </div>
  );
}

export default ProductsList;