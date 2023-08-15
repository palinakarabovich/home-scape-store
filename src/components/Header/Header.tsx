import React from 'react';
import styles from './Header.module.css';
import { cartIcon } from '../../utils/icons';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';

const Header = () => {

  const { categories } = useAppSelector((store) => store.categories);
  const { pathname } = useLocation();
  const { totalItems } = useAppSelector((store) => store.cart)

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
                <Link
                  to={c.url}
                  className={styles.link}
                >
                  {c.name}
                </Link>
                <ul className={styles.subcategories}>
                  {c.subcategories?.map((sub) => (
                    <li
                      className={styles.subcategory}
                      key={sub.name}
                    >
                      <Link
                        to={`${c.url}?subcategory=${sub.name.toLowerCase()}`}
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
      <Link
        to='/cart'
      >
        <div
          className={styles.cart}
          style={pathname.includes('cart') ? {
            display: 'none'
          } : {}}
        >
          <div className={styles.icon}>
            {cartIcon}
          </div>
          {
            totalItems > 0 && <div className={styles.quantity}>
              {totalItems}
            </div>
          }
        </div>
      </Link>
    </header>
  );
};

export default Header;
