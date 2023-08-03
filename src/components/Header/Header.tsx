import React from 'react';
import styles from './Header.module.css';
import { cartIcon } from '../../utils/icons';
import categories from '../../assets/categories';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a className={`${styles.link} ${styles.link_active}`}>SALE</a>
        <div className={styles.catalog}>
          <a className={styles.link}>Catalog</a>
          <ul className={styles.categories}>
          <li className={styles.category}>
          <a className={styles.link}>ALL</a>
          </li>
              {categories.map((c) => (
                <li className={styles.category}>
                  <a className={styles.link}>{c.name}</a>
                  <ul className={styles.subcategories}>
                    {c.subcategories.map((sub) => (
                      <li className={styles.subcategory}>
                        <a className={styles.link}>{sub}</a>
                      </li>
                    ))}
                  </ul>
                  </li>
              ))}
          </ul>
        </div>
        <a className={styles.link}>About</a>
        <a className={styles.link}>Contacts</a>
      </nav>
      <div className={styles.cart}>
        <div className={styles.icon}>
          {cartIcon}
        </div>
        <div className={styles.quantity}>
          2
        </div>
      </div>
    </header>
  );
};

export default Header;
