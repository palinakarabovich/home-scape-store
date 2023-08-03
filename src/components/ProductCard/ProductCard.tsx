import { IProduct } from '../../@types/types';
import { countPriceWithDiscount } from '../../utils/countPrice';
import styles from './ProductCard.module.css';
import React from 'react';

const ProductCard: React.FC<IProduct> = ({ name, description, price, discount, image }) => {
  return (
    <article className={styles.card}>
      {discount !== 0 &&
      <div className={styles.badge}>
        <p className={styles.percentage}>
          {discount}%
        </p>
      </div>
      }
      <img
        src={image}
        alt={name}
        className={styles.image}
      />
      <h3 className={styles.title}>
        {name}
      </h3>
      <p className={styles.description}>
        {description}
      </p>
      <div className={styles.price}>
        <p className={`${styles.number} ${discount > 0 ? styles.number_with_discount : ''}`}>
        €{price}
        </p>
        {
          discount !== 0 &&
          <p className={styles.discount}>
            €{countPriceWithDiscount(price, discount)}
          </p>
        }
      </div>
      <button
        type='button'
        className={styles.button}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;