import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.css'
import { IProductsListProps } from './types';
import { useAppSelector } from '../../hooks/useAppSelector';
import ProductCardSkeleton from '../ProductCardSkeleton/ProductCardSkeleton';

const ProductsList: React.FC<IProductsListProps> = ({ products }) => {

  const { loading } = useAppSelector((store) => store.products)
  const { loadingSale } = useAppSelector((store) => store.sale)

  return (
    <div className={styles.products}>
      {
        !loading.success 
          ? <>
            {[...new Array(3)].map((_) => <ProductCardSkeleton />)}
          </>
          : <>{products?.map((card) => (
            <ProductCard {...card} key={card.id} />
          ))}</>
      }

    </div>
  );
}

export default ProductsList;