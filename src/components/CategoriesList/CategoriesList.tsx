import { Link } from 'react-router-dom';
import styles from './CategoriesList.module.css'
import React from 'react';
import { ICategoriesListProps } from './types';

const CategoriesList: React.FC<ICategoriesListProps> = ({ categories, subcategory, category }) => {
  return (
    <ul className={styles.categories}>
      {categories.map((c, index) => (
        <Link
          to={`/${c}`}
          className={styles.link}
          key={index}
        >
          <li className={styles.category}>

            {subcategory
              ? `to ${c}`
              : category && c === 'all'
                ? `to ${c} products`
                : c}
          </li>
        </Link>
      )
      )}
    </ul>
  );
}

export default CategoriesList;