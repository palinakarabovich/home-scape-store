import React from 'react';
import styles from './Category.module.css'
import { ICategoryProps } from './types';

const Category: React.FC<ICategoryProps> = ({ name, isSelected, handleClick }) => {

  const handleCategoryClick = (cat: string) => {
    if (handleClick) {
      handleClick(cat)
    }
  }
  return (
    <div
      className={`${styles.category} ${isSelected ? styles.category_active : ''}`}
      onClick={() => handleCategoryClick(name)}
    >
      {name}
      {
        isSelected && <div className={styles.icon} />
      }
    </div>
  );
}

export default Category;