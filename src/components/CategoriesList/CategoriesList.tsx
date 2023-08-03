import { Link } from 'react-router-dom';
import styles from './CategoriesList.module.css'
import React from 'react';
import { ICategoriesListProps } from './types';

const CategoriesList: React.FC<ICategoriesListProps> = ({ categories, subcategory, category }) => {
  return (
    <ul className={styles.categories}>
      {categories.map((c) => (
        <li className={styles.category}>
          <Link to={`/${c}`} className={styles.link}>
            {subcategory
              ? `back to ${c}`
              : category && c === 'all'
                ? `back to ${c}`
                : c}
          </Link>
        </li>
      )
      )}
    </ul>
  );
}

export default CategoriesList;