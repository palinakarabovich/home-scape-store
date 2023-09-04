import { Link } from 'react-router-dom';
import styles from './SliderElement.module.css'
import React from 'react';
import { ISliderElementProps } from './types';
import { countPriceWithDiscount } from '../../utils/countPrice';

const SliderElement: React.FC<ISliderElementProps> = ({ id, images, name, price, discount }) => {
  return (
    <article className={styles.element}>
      <Link
        to={`/all/${id}`}
        className={styles.link}
      >
        <div className={styles.container}>
          <img
            className={styles.image}
            src={images[0]}
            alt={name}
          />
          <div className={styles.information}>
            <h3 className={styles.name}>{name} →</h3>
            <div className={styles.price}>
              <p className={styles.text}>€{countPriceWithDiscount(price, discount)}</p>
              <p className={styles.text}>€{price}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default SliderElement;