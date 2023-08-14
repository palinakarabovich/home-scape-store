import { Link } from 'react-router-dom';
import { IProduct } from '../../@types/types';
import { countPriceWithDiscount } from '../../utils/countPrice';
import styles from './ProductCard.module.css';
import React from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addItemToCart } from '../../redux/slices/cartSlice';

const ProductCard: React.FC<IProduct> = ( product ) => {

  const dispatch = useAppDispatch();

  const handleAddToCartClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(addItemToCart(product))
  }

  return (
    <article className={styles.card}>
      <Link
        to={`/all/${product.id}`}
        className={styles.link}
      >
        {product.hasDiscount &&
          <div className={styles.badge}>
            <p className={styles.percentage}>
              {product.discount}%
            </p>
          </div>
        }
        <img
          src={product.images[0]}
          alt={product.name}
          className={styles.image}
        />
        <h3 className={styles.title}>
          {product.name}
        </h3>
        <p className={styles.description}>
          {product.description}
        </p>
        <div className={styles.price}>
          <p className={`${styles.number} ${product.hasDiscount ? styles.number_with_discount : ''}`}>
            €{product.price}
          </p>
          {
            product.hasDiscount &&
            <p className={styles.discount}>
              €{countPriceWithDiscount(product.price, product.discount)}
            </p>
          }
        </div>
      </Link>
      <button
        type='button'
        className={styles.button}
        onClick={handleAddToCartClick}
      >
        Add to Cart
      </button>
    </article >
  );
}

export default ProductCard;