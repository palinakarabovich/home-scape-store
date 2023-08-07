import React from 'react';
import styles from './Header.module.css';
import { cartIcon } from '../../utils/icons';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';

const Header = () => {

  const { categories } = useAppSelector((store) => store.categories)

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to='/sale' className={`${styles.link} ${styles.link_active}`}>SALE</Link>
        <Link className={styles.link} to='/'>Home</Link>
        <div className={styles.catalog}>
          <a className={styles.link}>Catalog</a>
          <ul className={styles.categories}>
            <li
              className={styles.category}
              key={'all'}
            >
              <Link to='/all' className={styles.link}>ALL</Link>
            </li>
            {categories.map((c) => (
              <li
                className={styles.category}
                key={c.url}
              >
                <Link to={c.url} className={styles.link}>{c.name.toLocaleUpperCase()}</Link>
                <ul className={styles.subcategories}>
                  {c.subcategories?.map((sub) => (
                    <li
                      className={styles.subcategory}
                      key={sub.url}
                    >
                      <Link
                        to={sub.url}
                        className={styles.link}
                      >
                        {sub.name.toLowerCase()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <Link
          className={styles.link}
          to='/about'
        >
          About us
        </Link>
        <Link
          to='/contacts'
          className={styles.link}
        >
          Contacts
        </Link>
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
